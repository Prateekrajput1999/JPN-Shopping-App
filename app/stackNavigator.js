// StackNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import myscreen from "./myscreen";
import login from "../app/login";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="myscreen"
          component={myscreen}
          initialParams={{ index: 0 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
