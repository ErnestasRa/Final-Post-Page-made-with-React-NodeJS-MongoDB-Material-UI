const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const exportUser = mongoose.model("commentSchema", commentSchema);

module.exports = exportUser;
