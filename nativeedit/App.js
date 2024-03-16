import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import {
  useQuery,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { GET_TODOS } from "./graphql/query";
import Frontpg from "./Frontpg";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://192.168.1.26:5000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  //const { loading, error, data } = useQuery(GET_TODOS); //MARKED!
  //console.log(data);
  return (
    <ApolloProvider client={client}>
      <Frontpg client={client} />
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("MyApplication", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
