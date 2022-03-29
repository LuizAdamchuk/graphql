const db = require("../../../db");

module.exports = {
  Query: {
    perfis(obj, args) {
      return db.perfis;
    },
    perfil(obj, args) {
      const { id } = args;
      return db.perfis.find((perfil) => perfil.id === id);
    },
  },
};
