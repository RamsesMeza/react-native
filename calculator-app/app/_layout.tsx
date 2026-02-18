import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SNPro: require("../assets/fonts/SNPro-Regular.ttf"),
    PlaywriteCUGuides: require("../assets/fonts/PlaywriteCUGuides-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
