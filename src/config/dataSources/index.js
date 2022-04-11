const GitHubService = require("../../services/GitHub.service");
const TaskService = require("../../services/TaskService");
const UserService = require("../../services/UserService");

module.exports = () => ({
  GitHubService: GitHubService,
  UserService: UserService,
  TaskService: TaskService,
});
