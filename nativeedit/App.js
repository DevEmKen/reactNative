import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import {
  useQuery,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
//import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { GET_TODOS } from "./graphql/query";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation.js";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getProducts: {
          keyArgs: false,
          merge(existing, incoming, { args: { after } }) {
            let merged = null;
            // "After" is the start index from which to slice the
            // data array. If it's over 0, we should append new data
            if (existing && after !== 0) {
              merged = { ...existing };
              merged.edges = [
                merged.edges.slice(),
                incoming.edges.slice(),
              ].flat();
            } else {
              merged = { ...incoming };
            }

            return merged;
          },
        },
      },
    },
  },
});

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://192.168.1.28:5000/graphql",
  cache,
});

export default function App() {
  //loadErrorMessages();
  //loadDevMessages();
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("MyApplication", () => App);
