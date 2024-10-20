// app/ingredients.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import FoodCard from "../components/FoodCard";

// Sample ingredients data (can be dynamic)
const ingredients = [
  {
    id: "1",
    name: "Spinach",
    servingSize: "30g",
    calories: 7,
    carbs: 1.1,
    protein: 0.9,
    fat: 0.1,
  },
  {
    id: "2",
    name: "Kale",
    servingSize: "30g",
    calories: 7,
    carbs: 0.9,
    protein: 0.6,
    fat: 0.3,
  },
  {
    id: "3",
    name: "Strawberry",
    servingSize: "100g",
    calories: 36,
    carbs: 0.9,
    protein: 0.6,
    fat: 0.3,
  },
  {
    id: "4",
    name: "Blueberry",
    servingSize: "100g",
    calories: 64,
    carbs: 14.6,
    protein: 0.7,
    fat: 0.3,
  },
  // Add more ingredients as needed
];

export default function IngredientListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommended Ingredients</Text>
      <FlatList
        data={ingredients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodCard foodCard={item} />}
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
