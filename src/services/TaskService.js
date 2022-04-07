const db = require("../db");

class TaskService {
  constructor(service) {
    this.service = service;
  }

  listTasksById = async (user_id) => {
    return await this.service("tasks").where({ user_id });
  };

  getTaskById = async (user_id, id) => {
    const task = await this.service("users").where({ id }).firts();

    if (!task) throw new Error("Tarefa não encontrada");

    if (task.user_id != user_id) {
      throw new Error("Você não tem permissão");
    }

    return task;
  };

  createTask = async (user_id, data) => {
    return await (
      await this.service("tasks")
        .insert({ user_id, ...data })
        .returning("*")
    )[0];
  };

  updateTask = async (user_id, id, data) => {
    await this.getTaskById(user_id, id);
    return await (
      await this.service("tasks").where({ id }).update(data).returning("*")
    )[0];
  };

  deleteTask = async (user_id, id) => {
    await this.getTaskById(user_id, id);
    return await this.service("tasks").where({ id }).delete();
  };
}

module.exports = new TaskService(db);
