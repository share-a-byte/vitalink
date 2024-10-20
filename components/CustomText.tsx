import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

// Define the CustomText component with proper typing for props
const CustomText: React.FC<TextProps> = (props) => {
  return (
    <Text {...props} style={[styles.defaultFont, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "MontserratRegular", // Set Montserrat as the default font
  },
});

export default CustomText;
