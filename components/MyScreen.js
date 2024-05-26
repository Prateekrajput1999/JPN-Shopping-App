// MyScreen.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import login from "../app/login";

const data = [
  {
    id: "1",
    image: require("../assets/images/Girl1.jpg"),
    mainText: "20% Discount New Arrival Product",
    subText:
      "Publish up your selfies to make yourself more beautiful with this app.",
  },
  {
    id: "2",
    image: require("../assets/images/Girl2.jpg"),
    mainText: "Take Advantage Of The Offer Shopping",
    subText:
      "Publish up your selfies to make yourself more beautiful with this app.",
  },
  {
    id: "3",
    image: require("../assets/images/Boy1.jpg"),
    mainText: "All Types Offers Within Your Reach",
    subText:
      "Publish up your selfies to make yourself more beautiful with this app.",
  },
];

const MyScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // In React Navigation, when you navigate to a screen, you can pass parameters along with the navigation. These parameters can be accessed through the route.params object.
  // The line const { index } = route.params ?? { index: 0 }; is using destructuring to extract the index parameter from route.params.
  const { index } = route.params ?? { index: 0 };
  const item = data[index];

  const handlePress = () => {
    if (index < data.length - 1) {
      navigation.setParams({ index: index + 1 });
    } else {
      // Navigate to login page
      navigation.navigate("login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.mainText}>{item.mainText}</Text>
        <Text style={styles.subText}>{item.subText}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    maxWidth: "100%",
    height: 400,
    borderRadius: 20,
  },
  mainText: {
    marginTop: 60,
    fontSize: 31,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#000",
  },
  subText: {
    fontSize: 15,
    color: "#777",
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#000",
    width: 50,
    height: 50,
    position: "absolute",
    right: 25,
    bottom: 25,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default MyScreen;
