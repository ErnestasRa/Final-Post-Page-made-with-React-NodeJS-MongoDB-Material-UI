const sendRes = require("../../../modules/universal-res");
const session = require("express-session");

module.exports = {
  logout: async (req, res) => {
    if (req.session.user) {
      req.session.destroy();
    }
    res.send({ OK: "succesfully logged out" });
  },
};
