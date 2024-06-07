import React from "react";

import { StyleSheet, Text, Pressable } from "react-native";

export type Props = {
  name: string;
  url: string;
};

const Categories = ({ name, url }: Props) => {
  return (
    <Pressable
      onPress={() => {
        console.log("What is url", url);
      }}
      style={({ pressed }) => {
        return { ...styles.container, opacity: pressed ? 0.7 : 1 };
      }}
    >
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    height: 50,
    marginVertical: 5,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontFamily: "HappyMonkey",
    fontWeight: "400",
    fontSize: 17,
  },
});

export default Categories;

// ["expo-fonts", { "fonts": ["./assets/fonts/HappyMonkey-Regular.ttf"] }]
