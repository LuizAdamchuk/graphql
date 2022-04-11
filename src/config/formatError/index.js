const HTTPError = require("../../errors/HTTPError");
const PermissionError = require("../../errors/PermissionError");
const TaskError = require("../../errors/TaskError");

module.exports = (err) => {
  if (err.originalError instanceof PermissionError) {
    return new Error(err.message);
  }
  if (err.originalError instanceof TaskError) {
    return new Error(err.message);
  }
  if (err.originalError instanceof HTTPError) {
    return new Error(err.message);
  }
  return err;
};
