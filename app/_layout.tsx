import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Icons for TabBar
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/MontserratRegular.ttf'),
  });
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2A9D8F",
        tabBarInactiveTintColor: "#888",
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="doctors"
        options={{
          tabBarLabel: "Doctors",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-md" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
