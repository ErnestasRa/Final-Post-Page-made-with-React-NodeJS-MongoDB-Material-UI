import { Paper, Container } from "@mui/material";
import React from "react";
import UserProfileComponent from "../../../components/all-users/user-profile-component";
import ResponsiveAppBar from "../../../components/app-bar";
import StickyFooter from "../../../components/footer-component";

const UserProfile = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <Paper sx={{ height: "100vh" }}>
        <UserProfileComponent />
      </Paper>
      <StickyFooter />
    </Container>
  );
};

export default UserProfile;
