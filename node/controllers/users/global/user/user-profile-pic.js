const session = require("express-session");
const userSchema = require("../../../../schemas/userSchema");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  userprofilechangepic: async (req, res) => {
    const { url, userId } = req.body;
    if (req.session.user) {
      const newProfilePic = await userSchema.findOneAndUpdate(
        { _id: userId },
        { $set: { image: url } },
        { new: true }
      );

      sendRes(res, false, "success", null);
    }
  },
};
