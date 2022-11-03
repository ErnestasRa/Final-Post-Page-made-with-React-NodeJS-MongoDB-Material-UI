import * as React from "react";
import StickyFooter from "../../../components/footer-component";
import ResponsiveAppBar from "../../../components/app-bar";
import AllUsersComponent from "../../../components/all-users/all-users";
import { Container, Paper } from "@mui/material";

const AllUsers = () => {
  return (
    <Container>
      <Paper
        sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <ResponsiveAppBar />
        <AllUsersComponent />
        <StickyFooter />
      </Paper>
    </Container>
  );
};

export default AllUsers;
