const sendRes = require("../../../../modules/universal-res");
const session = require("express-session");
const messageSchema = require("../../../../schemas/messageSchema");
const userSchema = require("../../../../schemas/userSchema");

module.exports = {
  sendmessage: async (req, res) => {
    const { message, email } = req.body;
    if (req.session.user) {
      async function newMessage() {
        const newMessage = new messageSchema({
          firstName: req.session.firstName,
          lastName: req.session.lastName,
          email: req.session.email,
          message: message,
          forEmail: email,
        });
        console.log(newMessage);
        const newMessager = await newMessage.save();
      }
      sendRes(res, false, "success", null);
      newMessage();
    } else {
      sendRes(res, true, "failed", null);
    }
  },
};
