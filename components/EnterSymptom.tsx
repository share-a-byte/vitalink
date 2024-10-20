import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
//import { Picker } from "@react-native-picker/picker";
import SymptomCard from "../components/SymptomCard"; // Ensure to import your SymptomCard component

interface Symptom {
  id: string;
  name: string;
}

const symptomsList: Symptom[] = [
  { id: "1", name: "High Blood Pressure" },
  { id: "2", name: "Type II Diabetes" },
  { id: "3", name: "" },
];

const EnterSymptom: React.FC = () => {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);
  const [symptomCards, setSymptomCards] = useState<Symptom[]>([]);

  const addSymptom = () => {
    if (selectedSymptom) {
      const newSymptom = symptomsList.find(
        (symptom) => symptom.id === selectedSymptom
      );
      if (newSymptom) {
        setSymptomCards((prev) => [...prev, newSymptom]);
        setSelectedSymptom(null); // Reset selection after adding
      }
    }
  };

  return (
    <View>
      <Text style={styles.header}>Add a symptom:</Text>
      <Dropdown
        style={{
          height: 50,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
        data={symptomsList}
        labelField="name"
        valueField="id"
        value={selectedSymptom}
        onChange={(item) => {
          setSelectedSymptom(item.id);
        }}
        placeholder="Select a symptom"
      />
      <View style={styles.space}>
        <Button title="Add Symptom" onPress={addSymptom} />
      </View>

      {/* Render the symptom cards */}
      {symptomCards.map((symptom) => (
        <SymptomCard key={symptom.id} symptomCard={symptom} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  space: {
    marginBottom: 40,
  },
});

export default EnterSymptom;
