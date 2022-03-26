const { gql, ApolloServer } = require("apollo-server");

const usuarios = [
  {
    id: 1,
    ativo: true,
    nome: "Luiz",
    idade: 28,
    salario: 28.8,
  },
  {
    id: 2,
    ativo: true,
    nome: "Junior",
    idade: 27,
    salario: 29.8,
  },
];

const produtos = [
  {
    id: 1,
    ativo: true,
    nome: "Livro",
    descricao: "Descricao do livro",
    campanha: "Id da campanha",
    valor: 100.0,
  },
  {
    id: 2,
    ativo: true,
    nome: "Caneca",
    descricao: "Descricao do caneca",
    campanha: "Id da campanha",
    valor: 60.0,
  },
];

const typeDefs = gql`
  type Produto {
    ativo: Boolean
    id: ID
    nome: String
    descricao: String
    campanha: String
    valor: Float
  }

  type Usuario {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }

  type Query {
    usuarios: [Usuario]
    usuario(id: Int): Usuario
    produtos: [Produto]
    produto(id: Int): Produto
  }
`;

const resolvers = {
  Query: {
    usuarios() {
      return usuarios;
    },
    usuario(obj, args) {
      const { id } = args;
      return usuarios.find((usuario) => usuario.id === id);
    },
    produtos() {
      return produtos;
    },
    produto(obj, args) {
      const { id } = args;
      return produtos.find((produto) => produto.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
