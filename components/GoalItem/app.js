import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function GoalItem({ item, index, deleteGoal }) {
  return (
    <View style={styles.goalContet}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>

      <Icon
        name="trash"
        style={styles.icon}
        size={30}
        onPress={() => deleteGoal(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalContet: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#c6c6c6",
    alignItems: "center",
    padding: 10,
    marginTop: 5,
  },
  goalText: {
    color: "black",
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  icon: {
    color: "#ff0000",
    padding: 10,
  },
});
