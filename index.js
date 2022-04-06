const { ApolloServer } = require("apollo-server");
const { resolvers, typeDefs } = require("./src/graphql");
const UserService = require("./src/services/UserService");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    UserService: UserService,
  }),
  formatError: (err) => {
    if (err.message.startsWith("Usuário Existente:")) {
      return new Error(err.message);
    }
    return err;
  },
});

server.listen().then(({ url }) => console.log(url));
