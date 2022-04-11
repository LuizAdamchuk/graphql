class PermissionError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.message = message;
    this.name = "PermissionError";
  }
}

module.exports = PermissionError;
