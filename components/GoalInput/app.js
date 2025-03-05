import { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { Button, TextInput, View } from "react-native";

export default function GoalInput({ handleAdd, isOpen, setIsOpen }) {
  const [value, setValue] = useState("");

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.newContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.inputT}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <View style={styles.buttons}>
          <Button title="Add goals" onPress={() => handleAdd(value)} />
          <Button title="Cancel" onPress={() => setIsOpen(false)} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  newContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 30,
    gap: 10,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    flex: 1,
  },
  inputT: {
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
    padding: 10,
  },
  buttons: {
    justifyContent: "space-between",
    gap: 10,
    flexDirection: "row",
  },
});
