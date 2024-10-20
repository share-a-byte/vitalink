import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Define the type for chat card prop
interface ChatCard {
  id: string;
  name: string;
  time: string;
  recentMessage: string;
  image?: HTMLImageElement;
}

interface ChatCardProps {
  chatCard: ChatCard;
}

const ChatCard: React.FC<ChatCardProps> = ({ chatCard }) => {
  return (
    <View style={styles.cardContainer}>

      {/* Book Appointment Button */}
      <TouchableOpacity style={styles.enterChatButton}>
        {/* Top Section: Chat Info */}
        <View style={styles.topSection}>
            <View style={styles.chatInfo}>
                {/* Chat User Image */}
                <Image
                    source={{ uri: "https://via.placeholder.com/50" }} // Replace with actual image source
                    style={styles.chatUserImage}
                />
                <View style={styles.chatDetails}>
                    <Text style={styles.chatUserName}>{chatCard.name}</Text>
                    <Text style={styles.chatTime}>{chatCard.time}</Text>
                    <Text style={styles.chatRecentMessage}>{chatCard.recentMessage}</Text>
                </View>

            </View>

        </View>
      </TouchableOpacity>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  enterChatButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardContainer: {

  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  chatInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  chatUserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatDetails: {
    flex: 1,
  },
  chatUserName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  chatTime: {
    fontSize: 14,
    color: "#111827",
  },
  chatRecentMessage: {

  },
});

export default ChatCard;
