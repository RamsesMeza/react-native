import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "./components/FAB";

export default function App() {
  const [count, setCount] = useState(0);
  let decrement = () => setCount((prev) => prev - 1);
  let increment = () => setCount((prev) => prev + 1);

  let resetCounter = () => setCount(0);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.textHuge}>{count}</Text>
      <FAB text={"-1"} onPress={decrement} />
      <FAB
        text={"+1"}
        position="right"
        onPress={increment}
        onLongPress={resetCounter}
      />
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
  textHuge: {
    fontSize: 120,
    fontWeight: "thin",
  },
});
