import * as React from "react";
import { Container, Paper, TextField, Button } from "@mui/material";
import { post } from "../../functions/http";
import { useNavigate } from "react-router-dom";

const CreatePostComponent = () => {
  const navigate = useNavigate();
  const tweetRef = React.useRef();
  const imageRef = React.useRef();

  const createTweet = async () => {
    const tweetData = {
      tweet: tweetRef.current.value,
      image: imageRef.current.value,
    };
    const res = await post("createtweet", tweetData);

    if (!res.error) {
      navigate("/");
    } else {
      navigate("/error");
    }
  };

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          gap: 2,
        }}
      >
        <TextField
          id="standard-basic"
          inputRef={tweetRef}
          label="Tweet"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          inputRef={imageRef}
          label="Image"
          variant="standard"
        />
        <Button onClick={createTweet}>Tweet</Button>
      </Paper>
    </Container>
  );
};

export default CreatePostComponent;
