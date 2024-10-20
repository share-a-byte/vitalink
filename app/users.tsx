// app/users.tsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import UserCard from "../components/UserCard";
import SymptomCard from "../components/SymptomCard";
import EnterSymptom from "../components/EnterSymptom";
import { Dropdown } from "react-native-element-dropdown";
import { addSymptomToFirestore } from "../src/symptomservices";

const user = {
  id: "1",
  name: "Jackson Doe",
  age: 30,
  birthdate: "1993-02-15",
  phoneNumber: "(123) 345-456",
};

interface Symptom {
  id: string;
  name: string;
}

// const symptoms: Symptom[] = [
//   { id: "1", name: "Type II Diabetes" },
//   { id: "2", name: "High Blood Pressure" },
// ];

// const SymptomList: React.FC<{ userId: string }> = ({ userId }) => {
//   useEffect(() => {
//     const addSymptoms = async () => {
//       for (const symptom of symptoms) {
//         await addSymptomToFirestore(userId, symptom);
//       }
//     };

//     addSymptoms();
//   }, [userId]);

//   return (
//     <ScrollView style={styles.scrollviewpadding}>
//       {symptoms.map((symptom) => (
//         <SymptomCard key={symptom.id} symptomCard={symptom} />
//       ))}
//     </ScrollView>
//   );
// };

export default function UserProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <UserCard user={user} />
      <EnterSymptom /> {}
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
  scrollviewpadding: {
    marginBottom: 70,
  },
});
