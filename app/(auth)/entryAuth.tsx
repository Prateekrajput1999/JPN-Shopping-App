import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../../assets/images/page2new.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonLogin}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push(`/signUp`)}
          style={[styles.buttonSignUp, styles.signupButton]}
        >
          <Text style={[styles.buttonText, styles.signupButtonText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  overlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // This will darken the background image
    width: "100%",
    height: "100%",
  },
  buttonLogin: {
    width: "80%",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    position: "absolute",
    bottom: 120,
  },
  buttonSignUp: {
    width: "80%",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    position: "absolute",
    bottom: 50,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  signupButtonText: {
    color: "#FFFFFF",
  },
});

export default HomeScreen;
