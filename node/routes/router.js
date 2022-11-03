const express = require("express");
const router = express.Router();
const {
  emailValid,
  passwordValid,
  hasUpperCase,
} = require("../middleware/middle");
const {
  navbarNotLoggedIn,
  navbarSettings,
} = require("../controllers/nav-bar/nav-bar");
const { logout } = require("../controllers/users/auth/log-out");
const { register } = require("../controllers/users/auth/register");
const { userLogin } = require("../controllers/users/auth/login");
const { allusers } = require("../controllers/users/global/user/all-users");
const {
  createtweet,
} = require("../controllers/users/global/tweets/create-tweet");
const { alltweets } = require("../controllers/users/global/tweets/all-tweets");
const {
  singletweet,
} = require("../controllers/users/global/tweets/single-tweet");
const {
  createcomment,
} = require("../controllers/users/global/comments/create-comment");
const {
  allcomments,
} = require("../controllers/users/global/comments/all-comments");
const {
  userprofile,
} = require("../controllers/users/global/user/user-profile");
const {
  userprofilechangepic,
} = require("../controllers/users/global/user/user-profile-pic");
const {
  addliketotweet,
} = require("../controllers/users/global/tweets/add-like-to-tweet");
const {
  viewuserprofile,
} = require("../controllers/users/global/user/user-view-profile");
const {
  deleteusertweet,
} = require("../controllers/users/global/tweets/delete-user-tweet");
const {
  deleteusercomment,
} = require("../controllers/users/global/comments/delete-user-comment");
const {
  sendmessage,
} = require("../controllers/users/global/messages/send-message");
const {
  deletemessage,
} = require("../controllers/users/global/messages/delete-message");

router.get("/navbarnot", navbarNotLoggedIn);
router.get("/navbarsettings", navbarSettings);
router.get("/allusers", allusers);
router.get("/alltweets", alltweets);
router.get("/logout", logout);
router.get("/loggedinuser", userprofile);

router.post("/allcomments", allcomments);
router.post("/register", emailValid, passwordValid, hasUpperCase, register);
router.post("/login", emailValid, userLogin);
router.post("/createtweet", createtweet);
router.post("/singletweet", singletweet);
router.post("/createcomment", createcomment);
router.post("/newprofilepic", userprofilechangepic);
router.post("/addliketotweet", addliketotweet);
router.post("/viewuserprofile", viewuserprofile);
router.post("/deleteusertweet", deleteusertweet);
router.post("/deleteusercomment", deleteusercomment);
router.post("/sendmessage", sendmessage);
router.post("/deletemessage", deletemessage);
module.exports = router;
