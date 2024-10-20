import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface User {
  id: string;
  name: string;
  age: number;
  birthdate: string;
  phoneNumber: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: "https://via.placeholder.com/100" }} 
        style={styles.userImage}
      />
      <View style={styles.userDetails}>
      <Text style={styles.userName}>{user.name}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Age:</Text>
          <Text style={styles.ageText}>{user.age}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Birthdate:</Text>
          <Text style={styles.birthdateText}>{user.birthdate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Phone:</Text>
          <Text style={styles.phoneText}>{user.phoneNumber}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1, 
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center", 
    alignItems: "center", 
    padding: 16,
  },
  userImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    marginBottom: 16,
  },
  userDetails: {
    alignItems: "center", 
    marginBottom: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  ageText: {
    color: "#6B7280",
    marginBottom: 4,
    fontSize: 16,
  },
  birthdateText: {
    color: "#6B7280",
    fontSize: 16,
  },
  phoneText: {
    color: "#6B7280",
    fontSize: 16,
    marginBottom: 16,
  },
  infoText: { 
    fontSize: 14,
    color: "#10B981",
    fontWeight: "bold",
    marginRight: 8, 
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start", 
    marginBottom: 4, 
  },
  contactButton: {
    backgroundColor: "#1F2937",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  contactButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UserCard;
