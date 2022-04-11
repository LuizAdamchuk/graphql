class TaskError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.message = message;
    this.name = "TaskError";
  }
}

module.exports = TaskError;
