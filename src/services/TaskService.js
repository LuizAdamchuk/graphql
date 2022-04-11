const db = require("../db");
const PermissionError = require("../errors/PermissionError");
const TaskError = require("../errors/TaskError");

class TaskService {
  constructor(service) {
    this.service = service;
  }

  listTasks = async (user_id) => {
    return await this.service("tasks").where({ user_id });
  };

  getTaskById = async (user_id, id) => {
    console.log(user_id, id);
    const task = await this.service("tasks").where({ id }).first();
    if (!task) throw new TaskError("Tarefa não encontrada");

    if (task.user_id != user_id) {
      throw new PermissionError("Você não tem permissão");
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
    console.log(user_id, id);
    return await this.service("tasks").where({ id }).delete();
  };
}

module.exports = new TaskService(db);
