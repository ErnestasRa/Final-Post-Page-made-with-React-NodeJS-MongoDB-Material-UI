const postSchema = require("../../../../schemas/postSchema");
const session = require("express-session");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  deleteusertweet: async (req, res) => {
    const { id } = req.body;
    if (req.session.user) {
      const deleteTweet = await postSchema.findByIdAndDelete(id);
      sendRes(res, false, "tweet deleted", null);
    } else {
      sendRes(res, true, "need to be logged in", null);
    }
  },
};
