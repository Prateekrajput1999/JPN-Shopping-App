import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
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
  {
    id: "3",
    image: require("../assets/images/Boy1.jpg"),
    mainText: "All Types Offers Within Your Reach",
    subText:
      "Publish up your selfies to make yourself more beautiful with this app.",
  },
];

const IntroScreen = () => {
  const { width, height } = useWindowDimensions();
  const [pageIndex, setPageIndex] = useState(0);
  const item = data[pageIndex];
  const router = useRouter();

  const handlePress = () => {
    if (pageIndex === 2) {
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
          ...styles.image,
          height: height * 0.6,
          borderRadius: width * 0.05,
        }}
      />
      <Text style={styles.mainText}>{item.mainText}</Text>
      <Text style={styles.subText}>{item.subText}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
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
    backgroundColor: "#000",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 25,
    bottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default IntroScreen;
