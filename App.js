import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Another piece of text</Text>
      <Text style={styles.text}>Hello world</Text>
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: "#ff00ff",
  },
});
