import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";

import GoalItem from "./components/GoalItem/app.js";
import GoalInput from "./components/GoalInput/app.js";

export default function App() {
  const [value, setValue] = useState("");
  const [goals, setGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const deleteGoal = (index) => {
    let newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  };
  const handleAdd = (value) => {
    setGoals((prevGoals) => [...prevGoals, { text: value }]);
    setValue("");
  };

  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  return (
    <View style={styles.mainContent}>
      <View>
        <Button
          title="Add a new task"
          color="#c6a"
          onPress={() => setIsOpen(true)}
        />
        <GoalInput
          handleAdd={handleAdd}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <FlatList
          style={styles.goalsContent}
          data={goals}
          renderItem={(itemData, index) => {
            return (
              <View style={styles.goalContet} key={itemData.index}>
                <GoalItem
                  item={itemData.item}
                  deleteGoal={deleteGoal}
                  index={index}
                  keyExtractor={(item, index) => index.toString()}
                />
                {/*  <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  {itemData.item.text}
                </Text>
                <Icon
                  name="trash"
                  style={{ color: "#ff0000" }}
                  size={30}
                  onPress={() => deleteGoal(itemData.index)}
                /> */}
              </View>
            );
          }}
          alwaysBounceVertical={false}
        ></FlatList>
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

  input: {
    borderColor: "#000",
    borderWidth: 1,
    width: "70%",
    padding: 10,
  },

  goalsContent: {
    marginTop: 10,
    gap: 5,
    overflow: "scroll",
  },
});
