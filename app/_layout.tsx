import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons"; // Icons for TabBar
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import CustomText from "@/components/CustomText";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    MontserratRegular: require("../assets/fonts/MontserratRegular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
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
            tabBarLabel: ({ color }) => (
              <CustomText style={{ color }}>Home</CustomText>
            ),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="doctors"
          options={{
            tabBarLabel: ({ color }) => (
              <CustomText style={{ color }}>Doctors</CustomText>
            ),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-md" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
