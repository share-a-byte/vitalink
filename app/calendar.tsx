import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { addDays, format, startOfWeek } from "date-fns"; // Date utilities for handling current week

// Define the type for weekDates
interface WeekDate {
  date: Date;
}

// Generate dates for the current week (Sunday to Saturday)
const getCurrentWeekDates = (): WeekDate[] => {
  const start = startOfWeek(new Date(), { weekStartsOn: 0 }); // Start from Sunday
  const weekDates = Array.from({ length: 7 }).map((_, index) => ({
    date: addDays(start, index),
  }));
  return weekDates;
};

const meals = ["Breakfast", "Lunch", "Dinner"];

const DailyNutrition = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Default to today's date
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [weekDates, setWeekDates] = useState<WeekDate[]>([]); // Explicitly define the state type

  useEffect(() => {
    setWeekDates(getCurrentWeekDates());
  }, []);

  return (
    <View style={styles.container}>
      {/* Header with title and icons */}
      <View style={styles.header}>
        <Text style={styles.title}>Daily Nutritions</Text>
        <View style={styles.headerIcons}>
          <FontAwesome
            name="plus"
            size={24}
            color="black"
            style={styles.icon}
          />
          <FontAwesome
            name="calendar"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>

      {/* Date Selector */}
      <FlatList
        data={weekDates}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => format(item.date, "yyyy-MM-dd")}
        contentContainerStyle={styles.dateList}
        renderItem={({ item }) => {
          const isSelected =
            format(item.date, "yyyy-MM-dd") ===
            format(selectedDate, "yyyy-MM-dd");
          return (
            <TouchableOpacity
              style={[styles.dateItem, isSelected && styles.selectedDateItem]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text style={[styles.monthText, isSelected && styles.selectedMonthText]}>{format(item.date, "MMM")}</Text>
              <Text
                style={[styles.dayText, isSelected && styles.selectedDayText]}
              >
                {format(item.date, "dd")}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* Meal Selector */}
      <View style={styles.mealContainer}>
        {meals.map((meal) => (
          <TouchableOpacity
            key={meal}
            style={[
              styles.mealButton,
              meal === selectedMeal && styles.selectedMealButton,
            ]}
            onPress={() => setSelectedMeal(meal)}
          >
            <Text
              style={[
                styles.mealButtonText,
                meal === selectedMeal && styles.selectedMealText,
              ]}
            >
              {meal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F7F8FB", // Main background color
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6B7280", // Darker shade for text
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
  },
  dateList: {
    marginBottom: 20,
  },
  dateItem: {
    backgroundColor: "#e6f2ab", // Light purple for unselected date boxes
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginHorizontal: 8,
    alignItems: "center",
    width: 60,
    borderWidth: 1,
    borderColor: "transparent", // Transparent by default
  },
  selectedDateItem: {
    backgroundColor: "#8c994e", // Light purple for unselected date boxes
    borderColor: "#8c994e", // Same color for border to blend with background
  },
  monthText: {
    fontSize: 12,
    color: "#8c994e", // Darker text for month
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8c994e", // Neutral color for unselected day
  },
  selectedMonthText: {
    color: "#FFFFFF",
  },
  selectedDayText: {
    color: "#FFFFFF", // White for selected day text
  },
  mealContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mealButton: {
    backgroundColor: "#e6f2ab", // Light purple for meal button background
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedMealButton: {
    backgroundColor: "#8c994e", // Darker shade for selected meal button
    borderColor: "#8c994e", // Border for the selected meal button
    borderWidth: 2,
  },
  mealButtonText: {
    fontSize: 16,
    color: "#4B5563", // Darker text for unselected meal
  },
  selectedMealText: {
    color: "#FFFFFF", // White for selected meal text
    fontWeight: "bold",
  },
});

export default DailyNutrition;
