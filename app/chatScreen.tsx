import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore'; // Import Firestore from Firebase

// ChatScreen Component
const ChatScreen = ({ chatRoomId, userId }) => {
  const [messages, setMessages] = useState([]); // State to hold messages
  const [text, setText] = useState(''); // State to hold the input text

  // Function to send message
  const sendMessage = async () => {
    if (text.trim().length === 0) return; // Prevent sending empty messages
    await firestore()
      .collection('chatRooms')
      .doc(chatRoomId)
      .collection('messages')
      .add({
        senderId: userId,
        text: text,
        timestamp: firestore.FieldValue.serverTimestamp(), // Use Firestore timestamp
      });
    setText(''); // Clear the input after sending
  };

  // Function to listen for new messages in the chat room
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chatRooms')
      .doc(chatRoomId)
      .collection('messages')
      .orderBy('timestamp', 'asc') // Order messages by timestamp
      .onSnapshot((querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messages); // Update the messages state with new data
      });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [chatRoomId]);

  return (
    <View style={styles.container}>
      {/* Display the messages using a FlatList */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text>{item.senderId}: {item.text}</Text>
          </View>
        )}
      />

      {/* Text input for sending messages */}
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Type your message"
      />

      {/* Button to send the message */}
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default ChatScreen;
