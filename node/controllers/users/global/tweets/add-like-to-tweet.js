const session = require("express-session");
const postSchema = require("../../../../schemas/postSchema");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  addliketotweet: async (req, res) => {
    const { id } = req.body;
    if (req.session.user) {
      const findTweet = await postSchema.findOneAndUpdate(
        { _id: id },
        { $inc: { likes: 1 } },
        { new: true }
      );
    }
    sendRes(res, false, "success", null);
  },
};
