const userSchema = require("../../../../schemas/userSchema");
const postSchema = require("../../../../schemas/postSchema");
const commentSchema = require("../../../../schemas/commentSchema");
const messageSchema = require("../../../../schemas/messageSchema");
const sendRes = require("../../../../modules/universal-res");
const session = require("express-session");

module.exports = {
  userprofile: async (req, res) => {
    if (req.session.user) {
      const loggedInUser = await userSchema.findOne({
        email: req.session.email,
      });
      const loggedInUserPosts = await postSchema.find({
        email: req.session.email,
      });
      const loggedInUserComments = await commentSchema.find({
        email: req.session.email,
      });
      const privateMessages = await messageSchema.find({
        forEmail: req.session.email,
      });
      sendRes(res, false, "user found", {
        loggedInUser,
        loggedInUserPosts,
        loggedInUserComments,
        privateMessages,
      });
    } else {
      return sendRes(res, true, "must be logged in", null);
    }
  },
};
