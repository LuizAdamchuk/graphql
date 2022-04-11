const db = require("../../../db");

module.exports = {
  User: {
    async tasks(user, _, { dataSources }) {
      return await dataSources.TaskService.listTasks(user.id);
    },
  },
  Query: {
    users: async (_, __, { dataSources }) =>
      dataSources.UserService.listUsers(),

    user: async (_, { login }, { dataSources }) => {
      const userFound = await dataSources.UserService.listUser(login);

      if (userFound) return userFound;

      const { login: loginGit, avatar_url } =
        await dataSources.GitHubService.getUser(login);

      return await dataSources.UserService.createUser({
        login: loginGit,
        avatar_url,
      });
    },
  },
  Mutation: {
    createUser: async (_, { data }, { dataSources }) =>
      await dataSources.UserService.createUser(data),

    updateUser: async (_, { id, data }, { dataSources }) =>
      await dataSources.UserService.updateUser(id, data),

    deleteUser: async (_, { filter }, { dataSources }) => {
      await dataSources.UserService.deleteUser(filter);
    },
  },
};
