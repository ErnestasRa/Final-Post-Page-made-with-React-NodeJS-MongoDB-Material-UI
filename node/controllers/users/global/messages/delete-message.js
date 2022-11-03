const messageSchema = require("../../../../schemas/messageSchema");
const session = require("express-session");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  deletemessage: async (req, res) => {
    const { msgId } = req.body;
    if (req.session.user) {
      const deletedMessage = await messageSchema.findByIdAndDelete(msgId);
      sendRes(res, false, "success", null);
    } else {
      return sendRes(res, true, "need to be logged in", null);
    }
  },
};
