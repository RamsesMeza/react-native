import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

interface Props {
  onPress: () => void;
  onLongPress?: () => void;
  position?: "left" | "right";
  text: string;
}

export function FAB({ onPress, position = "left", text, onLongPress }: Props) {
  const positionStyle = position === "left" ? styles.left : styles.right;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        positionStyle,
        pressed && styles.btnPressed,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5a0642ff",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#fff",
    shadowOffset: { height: 0, width: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  btnPressed: {
    opacity: 0.9,
  },
  btnText: {
    color: "#fff",
    fontSize: 30,
  },
  right: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  left: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
});
