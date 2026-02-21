import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Counter() {
  const [value, setValue] = useState<number>(3);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{value}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={increment}>
          <Text>+1</Text>
        </Pressable>
        <Pressable onPress={decrement}>
          <Text>-1</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  textContainer: {
    backgroundColor: "blue",
    flex: 1,
  },
  btnContainer: {
    backgroundColor: "#19b66aff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
