import React from "react";
import { Stack, usePathname } from "expo-router";

const homePageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[category]"
        options={{ headerBackButtonMenuEnabled: true, title: "Products" }}
      />
    </Stack>
  );
};

export default homePageLayout;
