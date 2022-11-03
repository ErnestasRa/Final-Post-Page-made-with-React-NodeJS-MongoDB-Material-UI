const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
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
  message: {
    type: Array,
    required: true,
  },
  forEmail: {
    type: String,
    required: true,
  },
});

const exportUser = mongoose.model("messageSchema", messageSchema);

module.exports = exportUser;
