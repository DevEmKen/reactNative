import {
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  View,
  Button,
  Image,
  Switch,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { GET_PRODUCTS } from "./graphql/query.js";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import ModalSelector from "react-native-modal-selector";
import _ from "lodash";

const Frontpg = () => {
  const PAGESIZE = 5;
  const client = useApolloClient();
  const selections = [
    { key: 0, label: "Rating ↓" },
    { key: 1, label: "Rating ↑" },
    { key: 2, label: "Alpha ↓" },
    { key: 3, label: "Alpha ↑" },
  ];

  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: { first: PAGESIZE },
  });
  const [sortTag, setSortTag] = useState({ label: "Sort..." });
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);

  if (error) console.log(JSON.stringify(error));

  const handleSetSort = (label) => {
    setSortTag({ label });
    fetchMore({
      variables: {
        after: 0,
        first: PAGESIZE,
        sort: label,
      },
    });
  };

  const handleLoadMore = () => {
    setLoadMoreLoading(true);
    const after = data.getProducts.edges.length;
    const first = after + PAGESIZE;
    const currSort = sortTag.label === "Sort..." ? undefined : sortTag.label;
    fetchMore({
      variables: {
        after,
        first,
        sort: currSort,
      },
    })
      .then(() => setLoadMoreLoading(false))
      .catch((error) => console.error(error));
  };

  return (
    <FlatList
      contentContainerStyle={scrollStyle}
      data={data?.getProducts?.edges || []}
      renderItem={({ item }) => (
        <View
          className="w-80 my-5 bg-white flex items-center border-y border-x rounded-md"
          key={item.node.id}
        >
          <Image
            source={{ uri: item.node.img }}
            className="h-40 w-40 object-fill mt-2"
          />
          <Text className="text-lg">{item.node.title}</Text>
          <Text className="text-sm px-3">{item.node.detail}</Text>
          <Text className="text-base">{item.node.rating.toFixed(1)}★</Text>
        </View>
      )}
      keyExtractor={(item) => item.node.id}
      ListHeaderComponent={() => (
        <>
          <ModalSelector
            style={{ backgroundColor: "gray" }}
            data={selections}
            initValue={sortTag.label + "▼"}
            onChange={(option) => {
              setSortTag(selections[option.key]);
              handleSetSort(option.label);
            }}
          />
          {loading ? <Text>LOADING APP :^D</Text> : null}
          {error ? <Text>{JSON.stringify(error)}</Text> : null}
        </>
      )}
      ListFooterComponent={() =>
        data?.getProducts.pageInfo.hasNextPage && (
          <Button
            title={loadMoreLoading ? "Loading..." : "Load More"}
            onPress={handleLoadMore}
          />
        )
      }
    />
  );
};

const scrollStyle = {
  alignItems: "center",
};

export default Frontpg;
