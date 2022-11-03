import * as React from "react";
import StickyFooter from "../../../components/footer-component";
import ResponsiveAppBar from "../../../components/app-bar";
import { Container, Paper } from "@mui/material";
import ViewProfileComponent from "../../../components/all-users/view-profile-component";

const ViewProfile = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <Paper sx={{ height: "100vh" }}>
        <ViewProfileComponent />
      </Paper>
      <StickyFooter />
    </Container>
  );
};

export default ViewProfile;
