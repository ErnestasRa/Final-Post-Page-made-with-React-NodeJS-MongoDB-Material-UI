const postSchema = require("../../../../schemas/postSchema");
const session = require("express-session");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  createtweet: async (req, res) => {
    const { image, tweet } = req.body;

    if (req.session.user) {
      async function newTweet() {
        const newUserTweet = new postSchema({
          firstName: req.session.firstName,
          lastName: req.session.lastName,
          userImage: req.session.userImage,
          email: req.session.email,
          image: image,
          tweet: tweet,
          likes: 0,
        });
        const tweetas = await newUserTweet.save();
      }
      sendRes(res, false, "tweet created", { OK: "OK" });
      newTweet();
    } else {
      return sendRes(res, true, "need to be logged in", null);
    }
  },
};
