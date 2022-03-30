const db = require("../../../db");

function geradorId(lista) {
  let novoId;
  let ultimo = lista[lista.length - 1];
  if (!ultimo) {
    novoId = 0;
  } else {
    novoId = ultimo.id;
  }
  return ++novoId;
}

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
  Mutation: {
    criarUsuario(obj, args) {
      const { email } = args;

      const usuarioExistente = db.usuarios.some((u) => u.email === email);

      if (usuarioExistente) {
        throw new Error(`Usuário Existente: ${email}`);
      }

      const novoUsuario = {
        ...args,
        id: geradorId(db.usuarios),
        perfil: 2,
      };
      db.usuarios.push(novoUsuario);

      return novoUsuario;
    },
  },
};
