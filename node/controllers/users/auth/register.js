const userSchema = require("../../../schemas/userSchema");
const bcrypt = require("bcrypt");
const imgLink = require("../../../modules/default-img");
const sendRes = require("../../../modules/universal-res");

module.exports = {
  register: async (req, res) => {
    const { name, surname, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const foundUser = await userSchema.findOne({ email });
    if (!foundUser) {
      async function newUser() {
        const user = new userSchema({
          firstName: name,
          lastName: surname,
          email: email,
          password: hash,
          image: imgLink,
          messages: [],
          postCount: 0,
        });
        console.log(user);
        const member = await user.save();
      }
      sendRes(res, false, "user created", { OK: "OK" });
      newUser();
    } else {
      sendRes(res, true, "user already exists", null);
    }
  },
};
