import { Stack } from "expo-router";
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

const SuccessScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        style={{
          ...styles.image,
          width: width * 0.4,
          height: width * 0.4,
        }}
        source={require("../../assets/images/check-green.gif")}
      />
      <Text style={styles.title}>Successful!</Text>
      <Text style={styles.message}>
        You have successfully registered in our app and can start using it.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Shopping</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
    top: -180,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -150,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: "90%",
    justifyContent: "center",
    position: "absolute",
    bottom: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SuccessScreen;
