import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Symptom {
  id: string;
  name: string;
}

interface SymptomCardProp {
  symptomCard: Symptom;
}

const SymptomCard: React.FC<SymptomCardProp> = ({ symptomCard }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.symptomName}>{symptomCard.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
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
  symptomName: {
    fontWeight: "bold",
    fontSize: 18,
    flexDirection: "row",
  },
});

export default SymptomCard;
