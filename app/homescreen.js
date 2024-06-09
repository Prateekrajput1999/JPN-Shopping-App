// app/home.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { name: "New Arrivals", icon: "cart", products: 208 },
  { name: "Clothes", icon: "shirt", products: 358 },
  { name: "Bags", icon: "bag", products: 160 },
  { name: "Shoes", icon: "american-football", products: 230 },
  { name: "Electronics", icon: "laptop", products: 130 },
  { name: "Jewellery", icon: "diamond", products: 87 },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Categories</Text>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.category}>
            <Ionicons name={category.icon} size={24} color="white" />
            <Text style={styles.categoryText}>{category.name}</Text>
            <Text style={styles.productCount}>{category.products} Product</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    padding: 25,
  },
  categoryText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: -90,
  },
  productCount: {
    color: "#fff",
  },
});

export default HomeScreen;
