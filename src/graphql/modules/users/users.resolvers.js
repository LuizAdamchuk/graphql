const db = require("../../../db");

module.exports = {
  Query: {
    users: async (_, args, { UserService }) => UserService.listUsers(),
  },
  Mutation: {
    createUser: async (_, { data }, { UserService }) =>
      await UserService.createUser(data),

    updateUser: async (_, { id, data }, { UserService }) =>
      await UserService.updateUser(id, data),

    deleteUser: async (_, { filter }, { UserService }) => {
      await UserService.deleteUser(filter);
    },
  },
};
