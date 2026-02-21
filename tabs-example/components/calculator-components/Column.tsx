import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface ColumnProps extends ViewProps {}
export default function Column({ children, style, ...rest }: ColumnProps) {
  return (
    <View style={[styles.column, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    gap: 10,
  },
});
