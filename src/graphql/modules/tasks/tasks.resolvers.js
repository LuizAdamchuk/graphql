module.exports = {
  Query: {
    async tasks(_, __, { dataSources, user_id }) {
      console.log("RESOLVER TASK");
      console.log(user_id);
      return await dataSources.TaskService.listTasks(user_id);
    },
    async task(_, { id }, { dataSources, user_id }) {
      console.log("RESOLVER TASK");
      console.log(user_id, id);
      return await dataSources.TaskService.getTaskById(user_id, id);
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
