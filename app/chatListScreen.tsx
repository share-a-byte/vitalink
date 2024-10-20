import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ChatListScreen: { userId: string };
  ChatScreen: { chatRoomId: string; userId: string };
};

type ChatListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChatListScreen'
>;


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const db = firestore(); // Use the firestore() function from the package

const chatRoomsCollection = db.collection('chatRooms');

interface Room {
  id: string;
  userName: string;
  recentMessage: string;
  time: string;
  userProfilePic: string;
}

const ChatListScreen = ({ userId }: { userId: string }) => {
  const [chatRooms, setChatRooms] = useState<Room[]>([]);
  // const navigation = useNavigation(); // For navigating between screens
  const navigation = useNavigation<ChatListScreenNavigationProp>();

  // Fetch chat rooms or users the current user has chatted with
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chatRooms')
      .where('participants', 'array-contains', userId) // Fetch rooms where the current user is a participant
      .onSnapshot((querySnapshot) => {
        const rooms: Room[] = [];
        querySnapshot.forEach((doc) => {
          rooms.push({ 
            id: doc.id, 
            userName: doc.data().userName, 
            recentMessage: doc.data().recentMessage, 
            time: doc.data().time, 
            userProfilePic: doc.data().userProfilePic 
          }); 
        });
        setChatRooms(rooms);
      });

    return () => unsubscribe();
  }, [userId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() =>
              navigation.navigate('ChatScreen', { 
                chatRoomId: item.id, // Pass chatRoomId to ChatScreen
                userId,              // Pass current userId to ChatScreen
              })
            }
          >
            <Text>{item.userName}</Text> {/* Display the chat room or user's name */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  chatItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ChatListScreen;
