import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View, FlatList } from "react-native";
import ProductCard from "@/components/ProductCard";
import LottieView from "lottie-react-native";

const categoryPage = () => {
  const { category } = useLocalSearchParams();

  const { data, isPending, error } = useQuery({
    queryKey: ["productByCategory", category],
    queryFn: async () => {
      return await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
    },
  });

  const productList = data?.data?.products;

  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.container}>
        {isPending ? (
          <LottieView
            style={{ height: 400, width: 400, alignSelf: "center" }}
            source={require("@/assets/lottie/loadingAnimation.json")}
            autoPlay
            loop
          />
        ) : (
          // <Text>Loading...</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={productList}
              numColumns={2}
              renderItem={(productDetails) => (
                <ProductCard productDetails={productDetails} />
              )}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  grid: {},
  listContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default categoryPage;
