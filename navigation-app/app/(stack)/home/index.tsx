import CustomButton from "@/components/CustomButton";
import { Colors } from "@/constants/colors";
import { styles } from "@/styles/styles";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function HomeIndex() {
  return (
    <View style={styles.container}>
      <Link href={"/products"} asChild>
        <CustomButton color={Colors.primary}>Products</CustomButton>
      </Link>
      <Link href={"/todo"} asChild>
        <CustomButton color={Colors.warning}>Todo App</CustomButton>
      </Link>

      <CustomButton color={Colors.info} onPress={() => router.push("/profile")}>
        Profile
      </CustomButton>
      <CustomButton
        color={Colors.secondary}
        onPress={() => router.push("/settings")}
      >
        Settings
      </CustomButton>
    </View>
  );
}
