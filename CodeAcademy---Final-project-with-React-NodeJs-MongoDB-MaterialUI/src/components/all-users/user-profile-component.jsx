import * as React from "react";
import { get, post } from "../../functions/http";
import MainContext from "../../context/main-context";
import UserProfileCard from "./dumb-components/user-profile";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavigateBeforeTwoTone } from "@mui/icons-material";

const UserProfileComponent = () => {
  const urlRef = React.useRef();
  const navigate = useNavigate();
  const {
    setUserProfile,
    setUserProfileTweets,
    setUserProfileComments,
    setUserProfileMessages,
    setToggle,
    userProfile,
    userProfileTweets,
    userProfileComments,
    userProfileMessages,
    toggle,
  } = React.useContext(MainContext);

  const getUserProfileInfo = async () => {
    const res = await get("loggedinuser");

    if (!res.error) {
      setUserProfile(res.data.loggedInUser);
      setUserProfileTweets(res.data.loggedInUserPosts);
      setUserProfileComments(res.data.loggedInUserComments);
      setUserProfileMessages(res.data.privateMessages);
    } else {
      navigate("/notloggedin");
    }
  };

  const changeUserProfilePic = async () => {
    const newPicUrl = {
      url: urlRef.current.value,
      userId: userProfile._id,
    };
    const res = await post("newprofilepic", newPicUrl);
    urlRef.current.value = "";
    setToggle("none");
    getUserProfileInfo();
  };

  const deleteUserTweet = async (id) => {
    const tweetId = {
      id: id,
    };
    const res = await post("deleteusertweet", tweetId);
    if (res.error) {
      navigate("/notloggedin");
    }
    getUserProfileInfo();
  };
  const deleteUserComment = async (id) => {
    const CommentId = {
      id: id,
    };
    const res = await post("deleteusercomment", CommentId);
    if (res.error) {
      navigate("/notloggedin");
    }
    getUserProfileInfo();
  };

  const toggleVisibility = () => {
    if (toggle === "visible") {
      setToggle("none");
    } else {
      setToggle("visible");
    }
  };

  const viewMessages = () => {
    navigate("/viewmessages");
  };

  React.useEffect(() => {
    getUserProfileInfo();
  }, []);

  return (
    <Container>
      <Paper
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <UserProfileCard
          email={userProfile.email}
          firstName={userProfile.firstName}
          image={userProfile.image}
          lastName={userProfile.lastName}
          onClick={() => toggleVisibility()}
          inputRef={urlRef}
          changeUserProfilePic={() => changeUserProfilePic()}
          userProfileMessages={userProfileMessages}
          viewMessages={() => viewMessages()}
        />
      </Paper>
      <Paper>
        <Box>
          Your tweets ({userProfileTweets.length}):
          {userProfileTweets.map((tweet, i) => {
            return (
              <Box key={i}>
                <Typography variant="overline">
                  {tweet.tweet}{" "}
                  <Button onClick={() => deleteUserTweet(tweet._id)}>
                    Delete Tweet
                  </Button>
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box>
          Your comments ({userProfileComments.length}):
          {userProfileComments.map((tweet, i) => {
            return (
              <Box key={i}>
                <Typography variant="overline">
                  {tweet.comment}{" "}
                  <Button onClick={() => deleteUserComment(tweet._id)}>
                    Delete comment
                  </Button>
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Container>
  );
};

export default UserProfileComponent;
