const db = require("../../../db");

module.exports = {
  Usuario: {
    perfil(obj) {
      console.log(obj);
      return db.perfis.find((perfil) => perfil.id === obj.perfil);
    },
  },
  Query: {
    usuarios(obj, args) {
      return db.usuarios;
    },
    usuario(obj, args) {
      const { id } = args;
      return db.usuarios.find((usuario) => usuario.id === id);
    },
  },
};
