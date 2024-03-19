import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import {
  useQuery,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { GET_TODOS } from "./graphql/query";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation.js";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://192.168.1.28:5000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("MyApplication", () => App);
