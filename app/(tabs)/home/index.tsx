import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import categoryData from "@/components/categoryData.json";
import Categories, { Props } from "@/components/Categories";
import { useFonts } from "expo-font";
import LoadingAnimation from "@/components/LoadingAnimation";

const HomePage = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: async () => {
      return await axios.get("https://dummyjson.com/products/categories");
    },
  });

  useFonts({
    HappyMonkey: require("@/assets/fonts/HappyMonkey-Regular.ttf"),
  });

  const ItemsList: [Props] = data?.data;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <FontAwesome
            style={{ marginLeft: 10 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            placeholder="Search products"
            placeholderTextColor={"black"}
            style={styles.textInput}
          />
        </View>
        <View style={{ marginTop: 10 }} />
        {isPending ? (
          <LoadingAnimation />
        ) : (
          ItemsList.map(({ name, slug }) => {
            return <Categories key={slug} name={name} slug={slug} />;
          })
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 20,
    width: "100%",
    height: 50,
    backgroundColor: "#D3D3D3",
  },
  textInput: {
    width: "88%",
    height: "90%",
    paddingLeft: 10,
  },
});

export default HomePage;
