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
import CheckBox from "react-native-check-box";
import { useState } from "react";

const jpnLogo = require("../../assets/images/jpn2.jpg");

import { useRouter } from "expo-router";
import { setItem } from "@/utils/AsyncStorage";

const SignUp = () => {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    uniqueId: '',
    checkBox: false
  });
  const [showError, setShowError] = useState({
    userNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  });
  const router = useRouter();
  const { width } = useWindowDimensions();

  const handleSignUp = async (username: string, email: string, password: string, id: string) => {
    if (!username || !email || !password || !userData.confirmPassword || !userData.checkBox) {

      const newErrors = {
        userNameError: !username ? 'Username is required!' : '',
        emailError: !email ? 'Email Id is required!' : '',
        passwordError: !password ? 'Password is required!' : '',
        confirmPasswordError: !userData.confirmPassword ? 'Pls rewrite the same password!' : ''
      };

      setShowError({
        ...showError,
        ...newErrors
      });

      return;

    };

    const newUser = {
      userName: username,
      email: email,
      password: password,
      uniqueId: id
    };

    await setItem(newUser);

    setUserData({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      uniqueId: '',
      checkBox: false
    });

    router.push(`/login`)
  };


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
        <View style={{ marginTop: 40, height: 64 }}>
          <Text style={{ fontWeight: "700" }}>Username</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              textContentType="username"
              value={userData.userName}
              style={styles.textInput}
              onChange={(e: any) => {
                setShowError({
                  ...showError,
                  userNameError: ''
                });
                setUserData({
                  ...userData,
                  userName: e.target.value
                })
              }}
            />
            <AntDesign name="checkcircle" size={24} color="black" />
          </View>
          {showError.userNameError !== '' && (
            <Text style={{ color: '#D32F2F', fontWeight: 500 }}>{showError.userNameError}</Text>
          )}
        </View>
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
        <View style={{ marginTop: 40, height: 64 }}>
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
        <View style={{ marginTop: 40, height: 64 }}>
          <Text style={{ fontWeight: "700" }}>Confirm Password</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={true}
              textContentType="password"
              value={userData.confirmPassword}
              style={styles.textInput}
              onChange={(e: any) => {
                setShowError({
                  ...showError,
                  confirmPasswordError: ''
                });
                setUserData({
                  ...userData,
                  confirmPassword: e.target.value
                })
              }}
            />
            <AntDesign name="checkcircle" size={24} color="black" />
          </View>
          {showError.confirmPasswordError !== '' && (
            <Text style={{ color: '#D32F2F', fontWeight: 500 }}>{showError.confirmPasswordError}</Text>
          )}
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
            isChecked={userData.checkBox}
            onClick={() => setUserData({
              ...userData,
              checkBox: !userData.checkBox
            })}
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
          <TouchableOpacity activeOpacity={0.7} style={styles.loginButton} onPress={() => {
            const id = crypto.randomUUID();
            console.log('create id', id);
            setUserData({
              ...userData,
              uniqueId: id
            });
            handleSignUp(userData.userName, userData.email, userData.password, id);
          }}>
            <Text
              style={styles.buttonLabel}
            >
              Sign Up
            </Text>
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
