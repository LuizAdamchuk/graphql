module.exports = {
  Query: {
    async tasks(_, __, { dataSources, user_id }) {
      return await dataSources.TaskService.listTasksById(user_id);
    },
  },
  Mutation: {
    async createTask(_, { data }, { dataSources, user_id }) {
      return await dataSources.TaskService.createTask(user_id, data);
    },
    async deleteTask(_, { id }, { dataSources, user_id }) {
      return await dataSources.TaskService.deleteTask(user_id, id);
    },
    async updateTask(_, { id, data }, { dataSources, user_id }) {
      return await dataSources.TaskService.updateTask(user_id, id, data);
    },
  },
};
