import React from "react";
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
import { useRouter } from "expo-router";
import { useState } from "react";
import { checkUserExists } from "@/utils/AsyncStorage";

const jpnLogo = require("../../assets/images/jpn2.jpg");

const firstScreen = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [showError, setShowError] = useState({
    emailError: '',
    passwordError: '',
    userDoesNotExist: ''
  });
  const router = useRouter();
  const { height, width } = useWindowDimensions();

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {

      const newErrors = {
        emailError: !email ? 'Email Id is required!' : '',
        passwordError: !password ? 'Password is required!' : '',
        userDoesNotExist: ''
      };

      setShowError({
        ...showError,
        ...newErrors
      });

      return;

    };

    const result = await checkUserExists(email, password);
    console.log('res', result);

    if (!result?.emailId && !result?.password) {
      const newErrors = {
        emailError: '',
        passwordError: '',
        userDoesNotExist: 'User does not exist!'
      };

      setShowError({
        ...showError,
        ...newErrors
      });

      return;
    }

    if (!result?.emailId && result?.password) {
      setShowError({
        ...showError,
        emailError: 'Email id does not exist!',
        userDoesNotExist: ''
      });
      return;
    }

    if (result?.emailId && !result?.password) {
      setShowError({
        ...showError,
        passwordError: 'Password is incorrect!',
        userDoesNotExist: ''
      });
      return;
    }

    setUserData({
      email: '',
      password: ''
    });

    // router.dismissAll()
    // router.replace("/homePage");
  }

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
            marginTop: height / 25,
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
        <View style={{ marginTop: 40, height: 64 }}>
          <Text style={{ fontWeight: "700" }}>Email</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              textContentType="emailAddress"
              value={userData.email}
              style={styles.textInput}
              onChange={(e: any) => {
                setShowError({
                  ...showError,
                  emailError: ''
                });
                setUserData({
                  ...userData,
                  email: e.target.value
                })
              }}
            />
            <AntDesign name="checkcircle" size={24} color="black" />
          </View>
          {showError.emailError !== '' && (
            <Text style={{ color: '#D32F2F', fontWeight: 500 }}>{showError.emailError}</Text>
          )}
        </View>
        <View style={{ marginTop: 20, height: 64 }}>
          <Text style={{ fontWeight: "700" }}>Password</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={true}
              textContentType="password"
              value={userData.password}
              style={styles.textInput}
              onChange={(e: any) => {
                setShowError({
                  ...showError,
                  passwordError: ''
                });
                setUserData({
                  ...userData,
                  password: e.target.value
                })
              }}
            />
            <AntDesign name="checkcircle" size={24} color="black" />
          </View>
          {showError.passwordError !== '' && (
            <Text style={{ color: '#D32F2F', fontWeight: 500 }}>{showError.passwordError}</Text>
          )}
        </View>
        {showError.userDoesNotExist && (
          <Text style={{ color: '#D32F2F', fontWeight: 500, marginTop: 20 }}>User do not exist!</Text>
        )}
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => handleLogin(userData.email, userData.password)}
            activeOpacity={0.7}
            style={styles.loginButton}
          >
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
