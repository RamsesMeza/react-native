import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home Screen",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="products/index"
        options={{ title: "Products" }}
      ></Stack.Screen>
      <Stack.Screen
        name="settings/index"
        options={{ title: "Settings" }}
      ></Stack.Screen>
      <Stack.Screen
        name="profile/index"
        options={{ title: "Profile" }}
      ></Stack.Screen>
    </Stack>
  );
}
