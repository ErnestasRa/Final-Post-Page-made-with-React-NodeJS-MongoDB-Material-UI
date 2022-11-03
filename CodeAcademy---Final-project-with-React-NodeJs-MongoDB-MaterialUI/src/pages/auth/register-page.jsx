import * as React from "react";
import { Container, Paper } from "@mui/material";
import RegisterPageComponent from "../../components/register-page/register-page";
import ResponsiveAppBar from "../../components/app-bar";
import StickyFooter from "../../components/footer-component";

const RegisterPage = () => {
  return (
    <Container>
      <Paper sx={{ height: "100vh" }}>
        <ResponsiveAppBar />
        <RegisterPageComponent />
        <StickyFooter />
      </Paper>
    </Container>
  );
};

export default RegisterPage;
