import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export default function instructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
