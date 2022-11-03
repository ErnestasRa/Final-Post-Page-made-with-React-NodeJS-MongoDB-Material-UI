const postSchema = require("../../../../schemas/postSchema");
const session = require("express-session");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  singletweet: async (req, res) => {
    const { id } = req.body;
    const singleTweet = await postSchema.findOne({ _id: id });
    if (req.session.user) {
      return sendRes(res, false, "tweet:", singleTweet);
    } else {
      return sendRes(res, true, "must be logged in", null);
    }
  },
};
