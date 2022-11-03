const commentSchema = require("../../../../schemas/commentSchema");
const session = require("express-session");
const sendRes = require("../../../../modules/universal-res");

module.exports = {
  createcomment: async (req, res) => {
    const { comment, id } = req.body;
    if (req.session.user) {
      async function newComment() {
        const newUserComment = new commentSchema({
          firstName: req.session.firstName,
          lastName: req.session.lastName,
          email: req.session.email,
          id,
          comment,
        });
        const commentas = await newUserComment.save();
      }
      sendRes(res, false, "comment created", { OK: "OK" });
      newComment();
    } else {
      return sendRes(res, true, "need to be logged in", null);
    }
  },
};
