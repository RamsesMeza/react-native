import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const gotToHome = () => {
    router.push("/(tabs)/home");
  };
  return (
    <View>
      <Button title="Hacer login" onPress={gotToHome}></Button>
    </View>
  );
}
