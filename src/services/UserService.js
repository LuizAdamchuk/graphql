const db = require("../db");

class UserService {
  constructor(service) {
    this.service = service;
  }

  listUsers = async () => await this.service("users");

  listUser = async (login) => {
    return await this.service("users").where({ login }).first();
  };

  createUser = async (data) =>
    await (
      await this.service("users").insert(data).returning("*")
    )[0];

  updateUser = async (id, data) =>
    await (
      await this.service("users").where({ id }).update(data).returning("*")
    )[0];

  deleteUser = async (filter) => {
    if (filter.id) {
      return await this.service("users")
        .where({ id: filter.id })
        .delete()
        .returning("*");
    }
    if (filter.email) {
      return await this.service("users")
        .where({ email: filter.email })
        .delete()
        .returning("*");
    }
    throw new Error("Valor não encontrado");
  };
}

module.exports = new UserService(db);
