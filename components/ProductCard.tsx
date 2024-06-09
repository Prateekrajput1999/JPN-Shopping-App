import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const ProductCard = ({ productDetails }: any) => {
  const { height, width } = useWindowDimensions();
  const { thumbnail, title, brand, price } = productDetails?.item;
  return (
    <View style={styles.container}>
      <Image
        source={thumbnail}
        src={thumbnail}
        style={{
          ...styles.thumbnail,
          height: width * 0.45,
          width: width * 0.45,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          flexWrap: "wrap",
          maxWidth: width * 0.45,
        }}
      >
        {title}
      </Text>
      <Text style={{ fontSize: 15, flexWrap: "wrap", maxWidth: width * 0.45 }}>
        {brand}
      </Text>
      <Text
        style={{ fontSize: 20, fontWeight: "bold", maxWidth: width * 0.45 }}
      >
        {price}$
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 3,
    paddingBottom: 5,
    margin: 3,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 9,
  },
  thumbnail: {
    borderRadius: 5,
    // borderBottomWidth: 1,
    // borderRadius: 9,
    // borderColor: "gray",
  },
});

export default ProductCard;
