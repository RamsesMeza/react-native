import { colors } from "@/constants/colors";
import * as Haptics from "expo-haptics";
import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from "react-native";

interface Props extends PressableProps {
  text: string;
  color?: string;
  variant?: "default" | "large";
  textColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export function CustomBtn({
  text,
  color,
  variant = "default",
  textColor,
  onPress,
  ...rest
}: Props) {
  return (
    <Pressable
      onPress={(e) => {
        onPress?.(e);
        Haptics.selectionAsync();
      }}
      {...rest}
      style={({ pressed }) => [
        variant === "default" && styles.btn,
        variant === "large" && styles.btnLarge,
        pressed && styles.btnPressed,
        color && { backgroundColor: color },
      ]}
    >
      <Text style={[styles.btnText, textColor && { color: textColor }]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.darkGray,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    width: 80,
    height: 80,
    borderRadius: "100%",
  },
  btnLarge: {
    backgroundColor: colors.darkGray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    width: 170,
    height: 80,
  },
  btnText: {
    fontFamily: "SNPro",
    fontSize: 30,
    color: colors.withe,
  },
  btnPressed: {
    opacity: 0.8,
  },
});
