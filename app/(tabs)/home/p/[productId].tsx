import LoadingAnimation from "@/components/LoadingAnimation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Product = () => {
  const { productId } = useLocalSearchParams();

  console.log("What is product id", productId)

  const { data, isPending, error } = useQuery({
    queryKey: ["productById", productId],
    queryFn: async () => {
      return await axios.get(`https://dummyjson.com/products/${productId}`);
    },
  });

  console.log("What is product details", data);

  if (isPending) {
    return <LoadingAnimation />;
  }

  return (
    <View>
      <Text>Product loaded</Text>
    </View>
  );
};

export default Product;
