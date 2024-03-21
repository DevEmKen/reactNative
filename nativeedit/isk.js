const j = {
  edges: [
    {
      __typename: "ProductEdge",
      node: { __ref: "Product:65f931789ba2dc2d6febbee1" },
      cursor: "65f931789ba2dc2d6febbee1",
    },
    {
      __typename: "ProductEdge",
      node: { __ref: "Product:65f931789ba2dc2d6febbee2" },
      cursor: "65f931789ba2dc2d6febbee2",
    },
  ],
};

const k = {
  edges: [
    {
      __typename: "ProductEdge",
      node: { __ref: "Product:65f931789ba2dc2d6febbee3" },
      cursor: "65f931789ba2dc2d6febbee3",
    },
    {
      __typename: "ProductEdge",
      node: { __ref: "Product:65f931789ba2dc2d6febbee4" },
      cursor: "65f931789ba2dc2d6febbee4",
    },
  ],
};

const l = {
  getProducts: {
    __typename: "ProductConnection",
    edges: [
      [
        {
          __typename: "ProductEdge",
          node: {
            __typename: "Product",
            id: "65f931789ba2dc2d6febbee1",
            title: "Real Good Food",
            detail:
              "I haven't gotten the image for this one yet but I'm sure it will be delicious!",
            rating: 4.7,
            img: "https://s3-media4.fl.yelpcdn.com/bphoto/BVTseC93dhkXW3WY09paIw/l.jpg",
          },
          cursor: "65f931789ba2dc2d6febbee1",
        },
        {
          __typename: "ProductEdge",
          node: {
            __typename: "Product",
            id: "65f931789ba2dc2d6febbee2",
            title: "Pancake Stack",
            detail:
              "This mouth-watering stack of pancakes makes the world go round, lorem ipsum dolor sit amet as they say",
            rating: 3,
            img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          cursor: "65f931789ba2dc2d6febbee2",
        },
      ],
      [
        {
          __typename: "ProductEdge",
          node: {
            __typename: "Product",
            id: "65f931789ba2dc2d6febbee3",
            title: "Food Item 3",
            detail:
              "I'm getting bored and running out of things to say, good thing my new keyboard is fun to type on",
            rating: 1,
            img: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          cursor: "65f931789ba2dc2d6febbee3",
        },
        {
          __typename: "ProductEdge",
          node: {
            __typename: "Product",
            id: "65f931789ba2dc2d6febbee4",
            title: "Soupy Shrimp",
            detail:
              "Like shrimp? Like soup? How about shrimp shoup, where the shrimp shoup shoups the shrimp into a soup",
            rating: 3.9,
            img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          cursor: "65f931789ba2dc2d6febbee4",
        },
      ],
    ],
    pageInfo: {
      __typename: "PageInfo",
      hasNextPage: true,
      endCursor: "65f931789ba2dc2d6febbee6",
    },
  },
};
