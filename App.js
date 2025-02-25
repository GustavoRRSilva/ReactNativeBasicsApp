import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
  const [goals, setGoals] = useState([]);

  const handleAdd = (e) => {
    setGoals((prevGoals) => [...prevGoals, value]); // Add the new goal to the list
    setValue(""); // Clear input after adding the goal
  };

  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  return (
    <View style={styles.mainContent}>
      <View style={styles.newContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Button title="Add goals" onPress={handleAdd} style={styles.button} />
      </View>
      <View>
        <View>
          {goals.length > 0 ? (
            goals.map((goal, index) => (
              <Text key={index} style={{ color: "black" }}>
                {goal}
              </Text>
            ))
          ) : (
            <Text>List of goalss...</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  newContainer: {
    flexDirection: "row",
    justifyContent: "space",
    marginTop: 10,
    gap: 10,
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    width: "70%",
    padding: 10,
  },
});
