// StackNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyScreen from "../components/MyScreen";
import login from "../app/login";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="MyScreen"
          component={MyScreen}
          initialParams={{ index: 0 }}
        />
        <Stack.Screen name="Login" component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
