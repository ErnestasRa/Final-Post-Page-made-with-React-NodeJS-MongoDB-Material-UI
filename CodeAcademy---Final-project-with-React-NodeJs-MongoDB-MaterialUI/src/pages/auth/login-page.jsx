import * as React from "react";
import LoginPageComponent from "../../components/login-page/login-page";
import { Container, Paper } from "@mui/material";
import ResponsiveAppBar from "../../components/app-bar";
import StickyFooter from "../../components/footer-component";

const LoginPage = () => {
  return (
    <>
      <Container>
        <Paper sx={{ height: "90vh" }}>
          <ResponsiveAppBar />
          <LoginPageComponent />
        </Paper>
      </Container>
      <StickyFooter />
    </>
  );
};

export default LoginPage;
