// app/chatList.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ChatCard from "../components/ChatCard";

// Sample chat data (can be dynamic)
const chats = [
  {
    id: "1",
    name: "Dr. Kevon Lane",
    time: "9:38am",
    recentMessage: "Hi Dr. Lane, I hope this message finds you well. I wa...",
  },
  {
    id: "2",
    name: "Dr. Watson Karistin",
    time: "Oct 12",
    recentMessage: "Hi Dr. Karistin, thank you for responding to my concer...",
  },
  // Add more doctor chats as needed
];



export default function ChatListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatCard chatCard={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FB",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
});

