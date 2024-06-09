import React from "react";

import { StyleSheet, Text, Pressable } from "react-native";
import { usePathname, useRouter } from "expo-router";

export type Props = {
  name: string;
  slug: string;
};

const Categories = ({ name, slug }: Props) => {
  const pathname = usePathname();
  const { push, replace } = useRouter();
  return (
    <Pressable
      onPress={() => push(`${pathname}/${slug}`)}
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
