import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";

const jpnLogo = require("../assets/images/jpnLogo.jpg");


const SignUp = () => {
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
                    <TextInput textContentType="emailAddress" style={styles.textInput} />
                    <AntDesign name="checkcircle" size={24} color="black" />
                </View>
            </View>
            <View style={{ marginTop: 40 }}>
                <Text style={{ fontWeight: "700" }}>Email</Text>
                <View style={styles.textInputContainer}>
                    <TextInput textContentType="emailAddress" style={styles.textInput} />
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
            <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'row', marginTop: 40 }}>
                <CheckBox isChecked={false} onClick={() => { }} style={styles.checkbox} />
                <Text style={{ marginLeft: 5 }}>
                    By creating an account you agree with our
                    <Text
                        style={{ color: "rgba(53, 44, 135, 1)", fontWeight: "700" }}
                    >
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
    );
};

const styles = StyleSheet.create({
    checkbox: {
        // backgroundColor: 'pink',
    },
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
        marginTop: 50
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

export default SignUp;
