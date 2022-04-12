module.exports = {
  Query: {
    async tasks(_, __, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.TaskService.listTasks(user_id);
    },
    async task(_, { id }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.TaskService.getTaskById(user_id, id);
    },
  },
  Mutation: {
    async createTask(_, { data }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.TaskService.createTask(user_id, data);
    },
    async deleteTask(_, { id }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.TaskService.deleteTask(user_id, id);
    },
    async updateTask(_, { id, data }, { dataSources, validate }) {
      const user_id = validate();
      return await dataSources.TaskService.updateTask(user_id, id, data);
    },
  },
};
