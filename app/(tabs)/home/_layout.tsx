import React from "react";
import { Stack, usePathname } from "expo-router";

const homePageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[category]/index"
        options={{ headerBackButtonMenuEnabled: true, title: "Products" }}
      />
      <Stack.Screen name="p/[productId]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default homePageLayout;
