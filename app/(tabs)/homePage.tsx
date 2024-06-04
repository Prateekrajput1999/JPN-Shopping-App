import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <FontAwesome
          style={{ marginLeft: 10 }}
          name="search"
          size={24}
          color="black"
        />
        <TextInput
          placeholder="Search products"
          placeholderTextColor={"black"}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 20,
    width: "100%",
    height: 50,
    backgroundColor: "#D3D3D3",
  },
  textInput: { width: "88%", height: "90%", paddingLeft: 10 },
});

export default HomePage;
