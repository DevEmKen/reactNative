import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { GET_TODOS } from "./graphql/query.js";
import { useQuery } from "@apollo/client";

const Frontpg = ({ client }) => {
  const { loading, error, data } = useQuery(GET_TODOS); //MARKED!

  console.log(error);
  console.log("AYO222");

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start worffffking on youroiooo app!</Text>
      {loading ? <Text>LOAD</Text> : null}
      {error ? <Text>ERERERER</Text> : null}
      {data?.getTodos.map((todo) => (
        <Text key={todo.id}>{todo.title}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frontpg;
