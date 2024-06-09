import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

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
    mainText: "Take Advantage Of The Offer Shoppings",
    subText:
      "Publish up your selfies to make yourself more beautiful with this app.",
  },
];

const IntroScreen = () => {
  const { width } = useWindowDimensions();
  const [pageIndex, setPageIndex] = useState(0);
  const item = data[pageIndex];
  const router = useRouter();

  const handlePress = () => {
    if (pageIndex === 1) {
      router.replace("entryAuth");
      return;
    }

    setPageIndex((pageIndex) => pageIndex + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={item.image}
        style={{
          height: width * 0.9,
          width: width * 0.99,
          borderRadius: width * 0.05,
        }}
      />
      <Text style={styles.mainText}>{item.mainText}</Text>
      <Pressable
        style={({ pressed }) => {
          return { ...styles.button, opacity: pressed ? 0.7 : 1 };
        }}
        onPress={handlePress}
      >
        <FontAwesome name="arrow-circle-right" size={60} color="black" />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    marginTop: 6,
  },
  mainText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#000",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#777",
    position: "relative",
    top: -60,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    position: "absolute",
    right: 25,
    bottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 5,
  },
});

export default IntroScreen;
