const PermissionError = require("../../errors/PermissionError");
const jwtgenerator = require("../../helpers/jwtgenerator");

module.exports = ({ req }) => {
  const token = req.headers.authorization;
  return {
    validate() {
      try {
        const { id } = jwtgenerator.verifyToken(token);
        return id;
      } catch (error) {
        throw new PermissionError("Você não esta");
      }
    },
  };
};
