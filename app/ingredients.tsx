import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import FoodCard from "../components/FoodCard";

// Sample ingredients data with color and icon info
const ingredients = [
  {
    id: "1",
    name: "Spinach",
    servingSize: "30g",
    calories: 7,
    carbs: 1.1,
    protein: 0.9,
    fat: 0.1,
    color: ["#DEFDE0", "#B9F6A2"], // Color for spinach
    icon: "leaf", // Icon for spinach
  },
  {
    id: "2",
    name: "Kale",
    servingSize: "30g",
    calories: 7,
    carbs: 0.9,
    protein: 0.6,
    fat: 0.3,
    color: ["#DEFDE0", "#B9F6A2"], // Color for kale
    icon: "seedling", // Icon for kale
  },
  {
    id: "3",
    name: "Strawberry",
    servingSize: "100g",
    calories: 36,
    carbs: 0.9,
    protein: 0.6,
    fat: 0.3,
    color: ["#FFC1C1", "#FF6F6F"], // Color for strawberry
    icon: "apple-alt", // Icon for strawberry
  },
  {
    id: "4",
    name: "Blueberry",
    servingSize: "100g",
    calories: 64,
    carbs: 14.6,
    protein: 0.7,
    fat: 0.3,
    color: ["#C1C4FF", "#6F8EFF"], // Color for blueberry
    icon: "apple-alt", // Icon for blueberry
  },
  {
    id: "5",
    name: "Flaxseed",
    servingSize: "7g",
    calories: 37,
    carbs: 2,
    protein: 1.3,
    fat: 3,
    color: ["#F5DEB3", "#D2B48C"], // Light brown colors for strawberry
    icon: "bread-slice", // Icon for strawberry
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
