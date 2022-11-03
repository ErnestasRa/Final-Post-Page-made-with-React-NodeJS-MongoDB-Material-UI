const userSchema = require("../../../schemas/userSchema");
const session = require("express-session");
const bcrypt = require("bcrypt");
const sendRes = require("../../../modules/universal-res");

module.exports = {
  userLogin: async (req, res) => {
    const { email, password } = req.body;
    const foundUser = await userSchema.findOne({ email });
    if (foundUser) {
      const compare = await bcrypt.compare(password, foundUser.password);
      if (compare) {
        req.session.user = foundUser;
        req.session.firstName = foundUser.firstName;
        req.session.lastName = foundUser.lastName;
        req.session.userImage = foundUser.image;
        req.session.email = foundUser.email;
        return sendRes(res, false, "successfully logged in?", null);
      } else {
        return sendRes(res, true, "bad user credentials", null);
      }
    }
    res.send();
  },
};
