import { Text, View } from "react-native";
import DailyNutrition from "./calendar";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DailyNutrition />
      {/* <Text>Edit app/index.tsx to edit.</Text> */}
    </View>
  );
}
