module.exports = {
  usuarios: [
    {
      id: 1,
      ativo: true,
      email: "email@email.com",
      nome: "Luiz",
      idade: 28,
      salario: 28.8,
      perfil: 1,
    },
    {
      id: 2,
      ativo: true,
      email: "email1@email.com",
      nome: "Junior",
      idade: 27,
      salario: 29.8,
      perfil: 2,
    },
  ],
  perfis: [
    {
      id: 1,
      ativo: true,
      nome: "Perfil de admin",
      descricao: "Descricao do livro",
      role: "admin",
    },
    {
      id: 2,
      ativo: true,
      nome: "Perfil de usuario",
      descricao: "Descricao do caneca",
      role: "user",
    },
  ],
};
