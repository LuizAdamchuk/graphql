class HTTPError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.message = message;
    this.name = "HTTPError";
  }
}

module.exports = HTTPError;
