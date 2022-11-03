const session = require("express-session");
const userSchema = require("../../../../schemas/userSchema");

module.exports = {
  allusers: async (req, res) => {
    if (req.session.user) {
      const allUsers = await userSchema.find({});
      return res.send(allUsers);
    } else {
      res.send({ error: "must be logged in" });
    }
  },
};
