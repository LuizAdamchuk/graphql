const { RESTDataSource } = require("apollo-datasource-rest");
const HTTPError = require("../errors/HTTPError");

class GitHubService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.github.com";
  }

  async getUser(login) {
    try {
      return await this.get(`/users/${login}`);
    } catch (error) {
      if (error.extensions.response.status === 404) {
        throw new HTTPError("Usuário não encontrando: " + login);
      }
      throw new Error(error);
    }
  }
}

module.exports = new GitHubService();
