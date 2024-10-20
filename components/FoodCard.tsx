import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Importing icons

// Define the type for food prop
interface Food {
  id: string;
  name: string;
  servingSize: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  color: string[]; // Background color array
  icon: string; // Icon name
}

interface FoodCardProp {
  foodCard: Food;
}

const FoodCard: React.FC<FoodCardProp> = ({ foodCard }) => {
  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: foodCard.color[0] }, // Using color passed from props
      ]}
    >
      <View style={styles.foodInfo}>
        {/* Display icon passed from props */}
        <FontAwesome5
          name={foodCard.icon}
          size={30} // Smaller icon size
          color="#555" // Adjust icon color as needed
          style={styles.foodIcon}
        />

        <View style={styles.foodDetails}>
          <Text style={styles.foodName}>{foodCard.name}</Text>
          <Text style={styles.foodInfoText}>
            🔥 Calories: {foodCard.calories}
          </Text>
          <Text style={styles.foodInfoText}>
            Serving: {foodCard.servingSize}
          </Text>

          <View style={styles.macroContainer}>
            <View style={styles.macroItem}>
              <Text style={styles.macroText}>{foodCard.carbs}g</Text>
              <Text style={styles.macroText}>Carbs</Text>
            </View>

            <View style={styles.macroItem}>
              <Text style={styles.macroText}>{foodCard.protein}g</Text>
              <Text style={styles.macroText}>Protein</Text>
            </View>

            <View style={styles.macroItem}>
              <Text style={styles.macroText}>{foodCard.fat}g</Text>
              <Text style={styles.macroText}>Fat</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.moreInfoButton}>
        <Text style={styles.moreInfoButtonText}>see more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  foodInfo: {
    flexDirection: "row",
  },
  foodIcon: {
    marginRight: 20,
  },
  moreInfoButton: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    position: "absolute",
    top: 10,
    right: 10,
  },
  moreInfoButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  foodDetails: {
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  foodInfoText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  macroContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  macroItem: {
    alignItems: "center",
    flex: 1,
  },
  macroText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
});

export default FoodCard;
