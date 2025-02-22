import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);
  return (
    <View style={styles.mainContent}>
      <View style={styles.newContainer}>
        <TextInput placeholder="Your course goal" style={styles.input} />
        <Button title="Add goals" onPress={hello} />
      </View>
      <View>
        <Text>List of goalss...</Text>
      </View>
    </View>
  );
}

const hello = () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Hello world",
      body: "This is your goal notification",
    },
    trigger: null,
  });
};

const styles = StyleSheet.create({
  mainContent: {
    padding: 50,
  },
  newContainer: {
    flexDirection: "row",
    justifyContent: "space",
    marginTop: 10,
    gap: 10,
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    width: "80%",
    padding: 10,
  },
});
