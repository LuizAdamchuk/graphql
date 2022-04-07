const { ApolloServer } = require("apollo-server");
const { resolvers, typeDefs } = require("./src/graphql");
const GitHubService = require("./src/services/GitHub.service");
const TaskService = require("./src/services/TaskService");
const UserService = require("./src/services/UserService");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user_id = req.headers.authorization;

    return {
      user_id,
    };
  },
  dataSources: () => ({
    GitHubService: GitHubService,
    UserService: UserService,
    TaskService: TaskService,
  }),
  formatError: (err) => {
    if (err.message.startsWith("Usuário Existente:")) {
      return new Error(err.message);
    }
    return err;
  },
});

server.listen().then(({ url }) => console.log(url));
