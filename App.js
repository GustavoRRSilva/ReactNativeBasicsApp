import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [value, setValue] = useState("");
  const [goals, setGoals] = useState([]);

  const deleteGoal = (index) => {
    let newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  };
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
        <View style={styles.goalsContent}>
          {goals.length > 0 ? (
            goals.map((goal, index) => (
              <View style={styles.goalContet}>
                <Text
                  key={index}
                  style={{
                    color: "black",
                    fontSize: 20,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  {goal}
                </Text>
                <Icon
                  name="trash"
                  style={{ color: "#ff0000" }}
                  size={30}
                  onPress={() => deleteGoal(index)}
                />
              </View>
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
  goalsContent: {
    marginTop: 10,
    gap: 5,
  },
  goalContet: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#c6c6c6",
    alignItems: "center",
    padding: 10,
  },
});
