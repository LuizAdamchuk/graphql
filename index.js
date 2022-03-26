const { gql, ApolloServer } = require("apollo-server");

const usuarios = [
  {
    id: 1,
    ativo: true,
    nome: "Luiz",
    idade: 28,
    salario: 28.8,
    perfil: 1,
  },
  {
    id: 2,
    ativo: true,
    nome: "Junior",
    idade: 27,
    salario: 29.8,
    perfil: 2,
  },
];

const perfis = [
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
];

const typeDefs = gql`
  type Perfil {
    id: ID
    ativo: Boolean
    nome: String
    descricao: String
    role: String
  }

  type Usuario {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
    perfil: Perfil
  }

  type Query {
    usuarios: [Usuario]
    usuario(id: Int): Usuario
    perfis: [Perfil]
    perfil(id: Int): Perfil
  }
`;

const resolvers = {
  Usuario: {
    perfil(obj) {
      console.log(obj);
      return perfis.find((perfil) => perfil.id === obj.perfil);
    },
  },
  Query: {
    usuarios(obj, args) {
      return usuarios;
    },
    usuario(obj, args) {
      const { id } = args;
      return usuarios.find((usuario) => usuario.id === id);
    },
    perfis(obj, args) {
      return perfis;
    },
    perfil(obj, args) {
      const { id } = args;
      return perfis.find((perfil) => perfil.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
