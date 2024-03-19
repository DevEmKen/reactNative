import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  Image,
  Switch,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { GET_TODOS, GET_PRODUCTS } from "./graphql/query.js";
import { ADD_PRODUCT } from "./graphql/mutation.js";
import { useQuery, useMutation } from "@apollo/client";
import ModalSelector from "react-native-modal-selector";
//import { Container, Navbar } from "navbar-native";

const Frontpg = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);
  const [currSort, setCurrSort] = useState("Date");

  console.log("error is " + error);
  console.log("data is " + data);
  console.log("\n");

  let index = 0;
  const selections = [
    { key: index++, label: "Newest" },
    { key: index++, label: "Alpha (title)" },
    { key: index++, label: "Alpha (description)" },
  ];

  useEffect(() => {
    setProducts(data?.getProducts);
  }, []);

  const handleSetSort = () => {
    const compare = (a, b) => {
      switch (currSort) {
        case "Newest":
          break;
      }
    };

    setProducts(() => {
      const newProd = [];
    });
  };

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={scrollStyle}>
      <ModalSelector
        data={selections}
        initValue={currSort}
        onChange={(option) => {
          setCurrSort(option.label);
          handleSetSort();
        }}
      />

      {loading ? <Text>LOADING APP :^D</Text> : null}
      {error ? <Text>{error}</Text> : null}
      {products?.map((product) => (
        <View className="" key={product.id}>
          <Image
            source={{
              uri: product.img,
            }}
            className="h-40 w-40"
          />
          <Text>{product.title}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const scrollStyle = {
  alignItems: "center",
};

export default Frontpg;
