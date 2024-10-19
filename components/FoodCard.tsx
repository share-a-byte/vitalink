import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Food {
  id: string;
  name: string;
  serving_size: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image?: HTMLImageElement
}

interface FoodCardProp {
    foodcard: Food;
}

const FoodCard: React.FC<FoodCardProp> = ({ food }) => {
    return(
        <View style={styles.cardContainer}>
            
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
    foodName : {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    servingSize: {
        fontSize: 10,
    },
    calorieCount: {
        fontSize: 10,
    },
    proteinCount: {
        fontSize: 10,
    },
    carbCount: {
        fontSize: 10,
    }
    fatCount: {
        fontSize: 10,
    },
});

export default FoodCard;