// app/doctors.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DoctorCard from "../components/DoctorCard"; // Assuming you created the DoctorCard in a components folder

// Sample doctor data (can be dynamic)
const doctors = [
  {
    id: "1",
    name: "Dr. Kevon Lane",
    specialty: "Gynecologist (5 years Exp)",
    rating: 4.9,
    consultationFee: "$200",
    available: true,
  },
  {
    id: "2",
    name: "Dr. Watson Karistin",
    specialty: "Gynecologist (5 years Exp)",
    rating: 4.5,
    consultationFee: "$40",
    available: true,
  },
  // Add more doctors as needed
];

export default function DoctorListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Doctors Available</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DoctorCard doctor={item} />}
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
