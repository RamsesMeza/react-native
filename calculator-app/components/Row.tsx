import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {}
export function Row({ children, style, ...rest }: Props) {
  return (
    <View style={[styles.row, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
  },
});
