import mongoose from "mongoose";
import Product from "./models/product.js";

const products = [
  {
    title: "Real Good Food",
    detail:
      "I haven't gotten the image for this one yet but I'm sure it will be delicious!",
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/BVTseC93dhkXW3WY09paIw/l.jpg",
  },
  {
    title: "Pancake Stack",
    detail:
      "This mouth-watering stack of pancakes makes the world go round, lorem ipsum dolor sit amet as they say",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Food Item 3",
    detail:
      "I'm getting bored and running out of things to say, good thing my new keyboard is fun to type on",
    img: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Soupy Shrimp",
    detail:
      "Like shrimp? Like soup? How about shrimp shoup, where the shrimp shoup shoups the shrimp into a soup",
    img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Happy Toast",
    detail: "This toast is happy. I'm short.",
    img: "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Fire Soup",
    detail: "You should probably wait for it to cool down.",
    img: "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg",
  },

  // ... more products
];

mongoose
  .connect("mongodb://172.17.0.2:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

Product.insertMany(products)
  .then(() => console.log(`${products.length} products inserted!`))
  .catch((err) => console.error(err))
  .finally(() => mongoose.disconnect());
