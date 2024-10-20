import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            let iconName: keyof typeof FontAwesome.glyphMap = "home";

            if (route.name === "index") {
              iconName = "home";
            } else if (route.name === "doctors") {
              iconName = "user-md";
            }

            // We'll return null here as we'll render the icon in tabBarLabel
            return null;
          },
          tabBarLabel: ({ color }: { color: string }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color,
                  fontFamily: "MontserratRegular",
                  fontSize: 12,
                  marginRight: 5, // Add some space between text and icon
                }}
              >
                {route.name === "index" ? "Home" : "Doctors"}
              </Text>
              <FontAwesome
                name={route.name === "index" ? "home" : "user-md"}
                size={18}
                color={color}
              />
            </View>
          ),
          tabBarActiveTintColor: "#2A9D8F",
          tabBarInactiveTintColor: "#888",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            borderTopWidth: 0,
          },
          tabBarItemStyle: {
            paddingBottom: 5,
          },
        })}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="doctors" />
      </Tabs>
    </View>
  );
}
