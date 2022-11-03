import * as React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SingleTweetComponent from "../../components/tweets/dumb-components/single-tweet";
import { post } from "../../functions/http";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/main-context";

const SingleTweet = () => {
  const tweetId = localStorage.getItem("id");
  const {
    setToggle,
    setSingleTweet,
    singleTweet,
    setTweetComments,
    toggle,
    tweetComments,
  } = React.useContext(MainContext);
  const navigate = useNavigate();
  const commentRef = React.useRef();

  const getSingleTweetData = async () => {
    const tweetData = {
      id: tweetId,
    };
    const res = await post("singletweet", tweetData);

    if (!res.error) {
      setSingleTweet(res.data);
    } else {
      navigate("/notloggedin");
    }
  };

  const addNewComment = async () => {
    const commentData = {
      comment: commentRef.current.value,
      id: tweetId,
    };
    const res = await post("createcomment", commentData);
    if (res.error) {
      navigate("/notloggedin");
    }

    getComments();
    commentRef.current.value = "";
  };

  const getComments = async () => {
    const tweetData = {
      id: tweetId,
    };
    const res = await post("allcomments", tweetData);
    if (!res.error) {
      setTweetComments(res.data);
    } else {
      navigate("/notloggedin");
    }
  };

  const addLike = async () => {
    const tweetData = {
      id: tweetId,
    };

    const res = await post("addliketotweet", tweetData);
    if (res.error) {
      navigate("/notloggedin");
    }
  };

  const viewProfile = async (id) => {
    localStorage.setItem("userId", id);
    navigate("/viewprofile");
  };

  const toggleVisibility = () => {
    if (toggle === "visible") {
      setToggle("none");
    } else {
      setToggle("visible");
    }
  };

  React.useEffect(() => {
    getSingleTweetData();
    getComments();
  }, []);

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: 2,
          mt: "3vh",
          justifyContent: "cenFter",
          alignItems: "center",
        }}
      >
        <Box>
          <SingleTweetComponent
            firstName={singleTweet.firstName}
            image={singleTweet.image}
            tweet={singleTweet.tweet}
            onClick={() => toggleVisibility()}
            likeComment={() => addLike()}
          />
        </Box>
        <Box display={toggle}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="standard-basic"
              label="Comment"
              variant="standard"
              inputRef={commentRef}
            />
            <Button onClick={addNewComment}>Post</Button>
          </Box>
        </Box>
        <Box>
          {tweetComments.map((comment, i) => {
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  border: "1px solid black",
                  width: "40vh",
                  padding: "0.5vh",
                  mb: "2vh",
                }}
              >
                <Typography variant="caption">
                  {comment.firstName} {comment.lastName}
                  {":"}
                </Typography>
                <Typography variant="caption">{comment.comment}</Typography>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Container>
  );
};

export default SingleTweet;
