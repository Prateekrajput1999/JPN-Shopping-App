import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const jpnLogo = require("../assets/images/jpnLogo.jpg");

const firstScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={jpnLogo} />
      </View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "600",
          marginTop: 50,
          marginBottom: 8,
        }}
      >
        Welcome!
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "300",
        }}
      >
        please login or sign up to continue our app
      </Text>
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontWeight: "700" }}>Email</Text>
        <View style={styles.textInputContainer}>
          <TextInput textContentType="emailAddress" style={styles.textInput} />
          <AntDesign name="checkcircle" size={24} color="black" />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "700" }}>Password</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            style={styles.textInput}
          />
          <AntDesign name="checkcircle" size={24} color="black" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>
        <View style={{ position: "relative" }}>
          <View
            style={{
              borderBottomWidth: 1,
              marginTop: 14,
              borderColor: "#d3c6c6",
              opacity: 0.3,
            }}
          />
          <Text
            style={{
              position: "absolute",
              top: 4,
              left: "48%",
              fontWeight: "400",
              backgroundColor: "white",
              padding: 2,
              paddingTop: 0,
              borderRadius: 59,
            }}
          >
            or
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.loginButton,
            marginTop: 16,
            backgroundColor: "skyblue",
          }}
          onPress={() => router.push(`/signUp`)}
        >
          <Text style={styles.buttonLabel}>Create account</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: "100%",
    backgroundColor: "white",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 170,
    width: 170,
    borderRadius: 100,
    borderWidth: 2,
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#d3c6c6",
  },
  buttonContainer: {
    marginTop: 40,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default firstScreen;
