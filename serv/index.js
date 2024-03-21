import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import ProductAPI from "./datasource.js";

async function initServer() {
  const app = express();
  app.use(cors());
  dotenv.config();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    debug: true,
    dataSources: () => ({
      productAPI: new ProductAPI(), // Create a new instance of ProductAPI
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("Serv started!");
  });
  const PORT = process.env.PORT || 5000;
  try {
    await mongoose.connect(process.env.mongodb);
    console.log(`GOT CONN to mongoDB at port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
  app.listen(PORT, () => console.log(`EXPRESS server runnen on port ${PORT}`));
}

initServer();
