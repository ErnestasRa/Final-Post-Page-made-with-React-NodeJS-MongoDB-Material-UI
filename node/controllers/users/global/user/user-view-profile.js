const userSchema = require("../../../../schemas/userSchema");
const postSchema = require("../../../../schemas/postSchema");
const commentSchema = require("../../../../schemas/commentSchema");
const session = require("express-session");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  viewuserprofile: async (req, res) => {
    const { id, email } = req.body;
    if (req.session.user) {
      const foundUser = await userSchema.findOne({ _id: id });
      const foundUserPosts = await postSchema.find({ email });
      const foundUserComments = await commentSchema.find({ email });
      return sendRes(res, false, "user found", {
        foundUser,
        foundUserPosts,
        foundUserComments,
      });
    } else {
      return sendRes(res, true, "you need to login", null);
    }
  },
};
