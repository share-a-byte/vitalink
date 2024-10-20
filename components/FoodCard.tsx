import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Define the type for food prop
interface Food {
  id: string;
  name: string;
  servingSize: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image?: HTMLImageElement
}

interface FoodCardProp {
    foodCard: Food;
}

const FoodCard: React.FC<FoodCardProp> = ({ foodCard }) => {
    
  return (
    <View style={styles.cardContainer}>
      <View style={styles.foodInfo}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.foodImage}
        />

        <View style={styles.foodDetails}>
            <Text style={styles.foodName}>{foodCard.name}</Text>
            <Text style={styles.foodInfoText}>️‍🔥 Calories: {foodCard.calories}</Text>
            <Text style={styles.foodInfoText}>Serving: {foodCard.servingSize}</Text>

        </View>
      </View>

        <TouchableOpacity style={styles.moreInfoButton}>
            <Text style={styles.moreInfoButtonText}>...</Text>
        </TouchableOpacity>

      <View style={styles.cardFooter}>

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
    foodInfo: {
        flexDirection: "row"
    },
    foodImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    moreInfoButton: {
        backgroundColor: "#1F2937",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 20,
        position: 'absolute',
        top: 10,
        right: 10,   
    },
    moreInfoButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        alignItems: "center",
        fontSize: 12,
    },
    foodDetails: {
        flex: 1,
    },
    foodName : {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    foodInfoText: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
    },
    calorieCount: {
        fontSize: 10,
    },
    servingSize: {
        fontSize: 10,
    },
    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    macroContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 4,
    },
    macroItem: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',   
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: '6%',
        paddingHorizontal: '1%',
    },
    macroText: {
        fontSize: 20,
    },

});

export default FoodCard;