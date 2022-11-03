import { Container, Paper } from "@mui/material";
import * as React from "react";
import ResponsiveAppBar from "../../components/app-bar";
import StickyFooter from "../../components/footer-component";
import NotLoggedInComponent from "../../components/not-logged-in";

const NotLoggedIn = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <Paper>
        <NotLoggedInComponent />
      </Paper>
      <StickyFooter />
    </Container>
  );
};

export default NotLoggedIn;
