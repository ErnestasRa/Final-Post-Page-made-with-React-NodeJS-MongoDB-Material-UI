const postSchema = require("../../../../schemas/postSchema");

module.exports = {
  alltweets: async (req, res) => {
    const allTweets = await postSchema.find({});
    res.send(allTweets);
  },
};
