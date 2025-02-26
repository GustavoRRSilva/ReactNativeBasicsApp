import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function GoalItem({ item, index, deleteGoal }) {
  return (
    <View style={styles.goalContet} key={index}>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          padding: 5,
          borderRadius: 5,
        }}
      >
        {item.text}
      </Text>
      <Icon
        name="trash"
        style={{ color: "#ff0000" }}
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
});
