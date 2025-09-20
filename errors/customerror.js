class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customErrorHandler = (message, statusCode) => {
  throw new CustomAPIError(message, statusCode);
};

module.exports = { customErrorHandler, CustomAPIError };
