import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>HIgher or lower?</Text>
      </View>
      {/* <View>Log around</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
