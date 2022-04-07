module.exports = {
  Query: {
    async tasks(_, args, { dataSources, user_id }) {
      console.log(user_id);
      return await dataSources.TaskService.listTasksById(user_id);
    },
  },
};
