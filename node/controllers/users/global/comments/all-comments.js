const commentSchema = require("../../../../schemas/commentSchema");
const session = require("express-session");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  allcomments: async (req, res) => {
    const { id } = req.body;
    if (req.session.user) {
      const allComments = await commentSchema.find({ id });
      sendRes(res, false, "", allComments);
    } else {
      return sendRes(res, true, "need to be logged in", null);
    }
  },
};
