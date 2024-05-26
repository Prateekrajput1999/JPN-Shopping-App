import React, { useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import MyScreen from "../components/MyScreen";
import { useColorScheme } from "@/hooks/useColorScheme";
import StackNavigator from "../components/StackNavigator";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer
      independent={true}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="StackNavigator">
        <Stack.Screen name="MyScreen" component={MyScreen} />
        <Stack.Screen name="index" component={MyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
