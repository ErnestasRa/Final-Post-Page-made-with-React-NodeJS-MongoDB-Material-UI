const commentSchema = require("../../../../schemas/commentSchema");
const session = require("express-session");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  deleteusercomment: async (req, res) => {
    const { id } = req.body;
    if (req.session.user) {
      const deletedUserComment = await commentSchema.findByIdAndDelete(id);
      sendRes(res, false, "comment Deleted", null);
    } else {
      return sendRes(res, true, "need to be logged in", null);
    }
  },
};
