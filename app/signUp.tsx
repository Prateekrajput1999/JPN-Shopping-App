import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";

const jpnLogo = require("../assets/images/jpn2.jpg");

const SignUp = () => {
  const { width } = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={{
            ...styles.logo,
            height: width * 0.29,
            width: "100%",
          }}
          source={jpnLogo}
        />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          Sign Up
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "300",
          }}
        >
          Create an new account
        </Text>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontWeight: "700" }}>Username</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              textContentType="emailAddress"
              style={styles.textInput}
            />
            <AntDesign name="checkcircle" size={24} color="black" />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontWeight: "700" }}>Email</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              textContentType="emailAddress"
              style={styles.textInput}
            />
            <AntDesign name="checkcircle" size={24} color="black" />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
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
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontWeight: "700" }}>Confirm Password</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={true}
              textContentType="password"
              style={styles.textInput}
            />
            <AntDesign name="checkcircle" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "row",
            marginTop: 40,
          }}
        >
          <CheckBox
            isChecked={false}
            onClick={() => {}}
            style={styles.checkbox}
          />
          <Text style={{ marginLeft: 5 }}>
            By creating an account you agree with our
            <Text style={{ color: "rgba(53, 44, 135, 1)", fontWeight: "700" }}>
              {" "}
              Terms & Conditions
            </Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
            <Text style={styles.buttonLabel}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    height: "100%",
    backgroundColor: "white",
  },
  logo: {
    marginTop: 5,
    borderRadius: 2,
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
    marginBottom: 25,
  },
  checkbox: {},
  buttonLabel: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default SignUp;
