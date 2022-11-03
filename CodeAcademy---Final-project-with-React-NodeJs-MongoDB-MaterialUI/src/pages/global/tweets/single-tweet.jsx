import { Container } from "@mui/material";
import * as React from "react";
import ResponsiveAppBar from "../../../components/app-bar";
import StickyFooter from "../../../components/footer-component";
import SingleTweet from "../../../components/tweets/single-tweet-component";

const CreatePost = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <SingleTweet />
      <StickyFooter />
    </Container>
  );
};

export default CreatePost;
