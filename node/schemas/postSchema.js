const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tweet: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

const exportUser = mongoose.model("tweetSchema", tweetSchema);

module.exports = exportUser;
