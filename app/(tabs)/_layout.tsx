import React from "react";
import { Tabs, usePathname } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const TabLayout = () => {
  const params = usePathname();
  return (
    <Tabs sceneContainerStyle={{ marginTop: 10 }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              size={24}
              color={params.startsWith("/home") ? "white" : "black"}
            />
          ),
          tabBarLabel: () => undefined,
          headerShown: false,
          tabBarItemStyle: params.startsWith("/home")
            ? styles.selectedTabIcon
            : null,
        }}
      />
      <Tabs.Screen
        name="cartPage"
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="shopping-cart"
              size={24}
              color={params === "/cartPage" ? "white" : "black"}
            />
          ),
          tabBarLabel: () => undefined,
          headerShown: false,
          tabBarItemStyle:
            params === "/cartPage" ? styles.selectedTabIcon : null,
        }}
      />
      <Tabs.Screen
        name="notificationPage"
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="bell"
              size={24}
              color={params === "/notificationPage" ? "white" : "black"}
            />
          ),
          tabBarLabel: () => undefined,
          headerShown: false,
          tabBarItemStyle:
            params === "/notificationPage" ? styles.selectedTabIcon : null,
        }}
      />
      <Tabs.Screen
        name="profilePage"
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="user"
              size={24}
              color={params === "/profilePage" ? "white" : "black"}
            />
          ),
          tabBarLabel: () => undefined,
          headerShown: false,
          tabBarItemStyle:
            params === "/profilePage" ? styles.selectedTabIcon : null,
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  selectedTabIcon: {
    backgroundColor: "black",
    borderRadius: 5,
  },
});

export default TabLayout;
