import mongoose from "mongoose";
import Product from "./models/product.js";

//
//
//
// This is the file to seed the mongoDB image on Docker with products.
// Run with "node seed.js" within the Docker exec tab for the instance.
//
//
//

const products = [
  {
    title: "Real Good Food",
    detail:
      "I haven't gotten the image for this one yet but I'm sure it will be delicious!",
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/BVTseC93dhkXW3WY09paIw/l.jpg",
    rating: 4.7,
  },
  {
    title: "Pancake Stack",
    rating: 3,
    detail:
      "This mouth-watering stack of pancakes makes the world go round, lorem ipsum dolor sit amet as they say",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Food Item 3",
    rating: 1,
    detail:
      "I'm getting bored and running out of things to say, good thing my new keyboard is fun to type on",
    img: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Soupy Shrimp",
    rating: 3.9,
    detail:
      "Like shrimp? Like soup? How about shrimp shoup, where the shrimp shoup shoups the shrimp into a soup",
    img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Happy Toast",
    rating: 5,
    detail: "This toast is happy. I'm a short description.",
    img: "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Fire Soup",
    rating: 2.4,
    detail: "You should probably wait for it to cool down.",
    img: "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg",
  },
  {
    title: "Doge Toast",
    rating: 4.2,
    detail: "very good",
    img: "https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Ice Cream Cloud",
    rating: 1.3,
    detail: "Too airy, needs more dairy",
    img: "https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "French Fries",
    rating: 3.5,
    detail: "Best served fresh. Do not buy these from whataburger or in n out",
    img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Churro",
    rating: 3.6,
    detail:
      "These are pretty hard to find in Washington state. -1 star for availability",
    img: "https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Cupcake",
    rating: 2.9,
    detail: "Hey there, cupcake. Hows it going cupcake?",
    img: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Lobster",
    rating: 2.1,
    detail: "Extremely tasty for a bug.",
    img: "https://images.pexels.com/photos/1194431/pexels-photo-1194431.jpeg?auto=compress&cs=tinysrgb&w=300",
  },

  // ... more products
];

mongoose
  .connect("mongodb://172.17.0.3:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

Product.insertMany(products)
  .then(() => console.log(`${products.length} products inserted!`))
  .catch((err) => console.error(err))
  .finally(() => mongoose.disconnect());
