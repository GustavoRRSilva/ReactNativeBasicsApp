import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.container}>
        <Text>Title</Text>
        <Text>lorem ipsum lorem ipsum</Text>
      </View>
      <View style={styles.container}>
        <Text>Title</Text>
        <Text>lorem ipsum lorem ipsum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: "#c6c6c6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 10,
  },
});
