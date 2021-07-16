const { ApolloServer, gql } = require("apollo-server-express");
const { createWriteStream, existsSync, mkdirSync } = require("fs");
const path = require("path");
const express = require("express");

const app = express();

const { typeDefs } = require("./graphql/schema");
const { resolvers } = require("./graphql/resolvers");

existsSync(path.join(__dirname, "public/images")) ||
  mkdirSync(path.join(__dirname, "publicimages"));
console.log(path.join(__dirname, "public/images"));

const server = new ApolloServer({ typeDefs, resolvers });
app.use(express.static("public"));
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀  Server ready at http://localhost:4000/`)
);
