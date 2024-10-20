// app/users.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserCard from "../components/UserCard";

const user = {
  id: "1",
  name: "Jackson Doe",
  age: 30,
  birthdate: "1993-02-15",
  phoneNumber: "(123) 345-456",
};

export default function UserProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <UserCard user={user} />
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
});
