import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FieldValue } from '@react-native-firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp
import { StackParamList } from '../components/navigation/StackParamList'; // Import the type for your stack parameters

// Define the types for the route and navigation props
type ChatScreenRouteProp = RouteProp<StackParamList, 'ChatScreen'>; // Adjust this based on your actual parameter list

interface Message {
  id: string; // The unique identifier for the message
  senderId: string; // The ID of the user who sent the message
  text: string; // The content of the message
  timestamp: FieldValue; // The timestamp of when the message was sent
}

interface Props {
  route: ChatScreenRouteProp; // Type for route
  navigation: StackNavigationProp<StackParamList, 'ChatScreen'>; // Type for navigation
}


const ChatScreen = () => {
  
  const route = useRoute<RouteProp<StackParamList, 'ChatScreen'>>();
  const { chatRoomId, userId } = route.params; // Get chatRoomId and userId from route params
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageContent, setMessageContent] = useState('');


  // Send a new message
  const sendMessage = async () => {
    
    if (messageContent.trim()) {
      const newMessage = {
        senderId: userId,
        text: messageContent,
        timestamp: firestore.FieldValue.serverTimestamp(), // server time
      };

      await firestore()
        .collection('chatRooms')
        .doc(chatRoomId)
        .collection('messages')
        .add(newMessage);

        setMessageContent(''); // Clear input field after sending
    }
  };

  // Listen for messages in the chat room
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chatRooms')
      .doc(chatRoomId)
      .collection('messages')
      .orderBy('timestamp', 'asc') // Order messages by timestamp
      .onSnapshot((querySnapshot) => {
        const messagesArray: Message[] = [];
        querySnapshot.forEach((doc) => {
          messagesArray.push({
            id: doc.id,
            senderId: doc.data().senderId, // Make sure to correctly get the senderId
            text: doc.data().text, // Make sure to correctly get the text
            timestamp: doc.data().timestamp, // Ensure this is also defined
          });

        });
        setMessages(messagesArray); // Update state with new messages
      });

    return () => unsubscribe(); // Cleanup on unmount
  }, [chatRoomId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text>{item.senderId}: {item.text}</Text> {/* Display the message content */}
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageContent}
          onChangeText={setMessageContent}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default ChatScreen;




// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// const ChatScreen = ({ route }) => {
//   const { chatRoomId, userId } = route.params; // Get chatRoomId and userId from route params
//   const [messages, setMessages] = useState([]);
//   const [messageContent, setMessageContent] = useState('');

//   // Function to send a new message
//   const sendMessage = async () => {
//     if (messageContent.trim()) {
//       const newMessage = {
//         senderId: userId,
//         text: messageContent,
//         timestamp: firestore.FieldValue.serverTimestamp(), // server time
//       };

//       // Add the message to the 'messages' sub-collection
//       await firestore()
//         .collection('chatRooms')
//         .doc(chatRoomId)
//         .collection('messages')
//         .add(newMessage);

//       setMessageContent(''); // Clear input field after sending
//     }
//   };

//   // Listen for messages from Firestore
//   useEffect(() => {
//     const unsubscribe = firestore()
//       .collection('chatRooms')
//       .doc(chatRoomId)
//       .collection('messages')
//       .orderBy('timestamp', 'asc') // Order messages by timestamp
//       .onSnapshot((querySnapshot) => {
//         const messages = [];
//         querySnapshot.forEach((doc) => {
//           messages.push({
//             id: doc.id,
//             ...doc.data()
//           });
//         });
//         setMessages(messages); // Update state with new messages
//       });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, [chatRoomId]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.messageContainer}>
//             <Text>{item.senderId}: {item.text}</Text> {/* Display the message content */}
//           </View>
//         )}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={messageContent}
//           onChangeText={setMessageContent}
//           placeholder="Type a message..."
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   messageContainer: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//     backgroundColor: '#f0f0f0',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//   },
// });

// export default ChatScreen;



// import firebase from '@react-native-firebase/app';
// import firestore from '@react-native-firebase/firestore';


// const sendMessage = async (chatRoomId, userId, text) => {
//     const newMessage = {
//       senderId: userId,
//       text: text,
//       timestamp: firestore.FieldValue.serverTimestamp(), // server time
//     };
  
//     // Add the message to the 'messages' sub-collection
//     await firestore()
//       .collection('chatRooms')
//       .doc(chatRoomId)
//       .collection('messages')
//       .add(newMessage);
// };

// const listenForMessages = (chatRoomId, setMessages) => {
//     return firestore()
//       .collection('chatRooms')
//       .doc(chatRoomId)
//       .collection('messages')
//       .orderBy('timestamp', 'asc') // Order messages by timestamp
//       .onSnapshot((querySnapshot) => {
//         const messages = [];
//         querySnapshot.forEach((doc) => {
//           const messageData = doc.data();
//           messages.push({
//             id: doc.id,
//             ...messageData
//           });
//         });
//         setMessages(messages); // Update state with new messages
//       });
//   };
  