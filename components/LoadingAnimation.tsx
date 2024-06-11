import React from "react";
import { Try } from "expo-router/build/views/Try";
import LottieView from "lottie-react-native";
import { Text } from "react-native";

const LoadingAnimation = () => {
  return (
    <Try catch={() => <Text>Loading...</Text>}>
      <LottieView
        style={{ height: 400, width: 400, alignSelf: "center" }}
        source={require("@/assets/lottie/loadingAnimation.json")}
        autoPlay
        loop
      />
    </Try>
  );
};

export default LoadingAnimation;
