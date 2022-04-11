const { ApolloServer } = require("apollo-server");
const { resolvers, typeDefs } = require("./src/graphql");
const config = require("./src/config");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  ...config,
});

server.listen().then(({ url }) => console.log(url));
