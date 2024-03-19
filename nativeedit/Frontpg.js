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
import _ from "lodash";
//import { Container, Navbar } from "navbar-native";

const Frontpg = () => {
  let index = 0;
  const selections = [
    { key: index++, label: "Rating ↓" },
    { key: index++, label: "Rating ↑" },
    { key: index++, label: "Alpha ↓" },
    { key: index++, label: "Alpha ↑" },
  ];

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState(null);
  const [currSort, setCurrSort] = useState({ label: "Sort..." });

  console.log("error is " + error);
  console.log("data is " + data);
  console.log("\n");

  useEffect(() => {
    if (data) {
      setProducts(data.getProducts);
    }
  }, [data]);

  const handleSetSort = (label) => {
    const compare = (a, b) => {
      switch (label) {
        case "Rating ↑":
          console.log("comparing " + a.rating + " to " + b.rating);
          if (a.rating < b.rating) return -1;
          if (a.rating > b.rating) return 1;
          return 0;
        case "Rating ↓":
          console.log("comparing " + a.rating + " to " + b.rating);
          if (a.rating < b.rating) return 1;
          if (a.rating > b.rating) return -1;
          return 0;
        case "Alpha ↑":
          const newA = a.title.toLowerCase();
          const newB = b.title.toLowerCase();
          console.log("comparing " + newA + " to " + newB);
          if (newA.localeCompare(newB) < 0) return -1;
          if (newA.localeCompare(newB) > 0) return 1;
          return 0;
        case "Alpha ↓":
          const nA = a.title.toLowerCase();
          const nB = b.title.toLowerCase();
          console.log("comparing " + nA + " to " + nB);
          if (nA.localeCompare(nB) < 0) return 1;
          if (nA.localeCompare(nB) > 0) return -1;
          return 0;
      }
    };

    setProducts(() => {
      console.log("currSort is " + currSort);
      console.log("about to sort products: " + JSON.stringify(products));
      const newProd = _.cloneDeep(products).sort(compare);
      console.log("SORTED: " + JSON.stringify(newProd));
      return newProd;
    });
  };

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={scrollStyle}>
      <ModalSelector
        data={selections}
        initValue={currSort.label + "▼"}
        onChange={(option) => {
          setCurrSort(selections[option.key]);
          handleSetSort(option.label);
        }}
      />

      {loading ? <Text>LOADING APP :^D</Text> : null}
      {error ? <Text>{JSON.stringify(error)}</Text> : null}
      {products?.map((product) => (
        <View
          className="w-80 my-5 bg-white flex items-center border-y border-x rounded-md"
          key={product.id}
        >
          <Image
            source={{
              uri: product.img,
            }}
            className="h-40 w-40 object-fill mt-2"
          />
          <Text className="text-lg">{product.title}</Text>
          <Text className="text-sm px-3">{product.detail}</Text>
          <Text className="text-base">{product.rating.toFixed(1)}★</Text>
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
