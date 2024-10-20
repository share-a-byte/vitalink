import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const sendMessage = async (chatRoomId, userId, text) => {
    const newMessage = {
      senderId: userId,
      text: text,
      timestamp: firestore.FieldValue.serverTimestamp(), // server time
    };
  
    // Add the message to the 'messages' sub-collection
    await firestore()
      .collection('chatRooms')
      .doc(chatRoomId)
      .collection('messages')
      .add(newMessage);
};

const listenForMessages = (chatRoomId, setMessages) => {
    return firestore()
      .collection('chatRooms')
      .doc(chatRoomId)
      .collection('messages')
      .orderBy('timestamp', 'asc') // Order messages by timestamp
      .onSnapshot((querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          const messageData = doc.data();
          messages.push({
            id: doc.id,
            ...messageData
          });
        });
        setMessages(messages); // Update state with new messages
      });
  };
  