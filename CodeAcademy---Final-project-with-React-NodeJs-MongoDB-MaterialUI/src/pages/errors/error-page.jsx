import * as React from "react";
import { Container, Paper, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/app-bar";
import StickyFooter from "../../components/footer-component";

const ErrorPage = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          mt: "3vh",
        }}
      >
        <Typography variant="h2">Page not found</Typography>
      </Paper>
      <StickyFooter />
    </Container>
  );
};

export default ErrorPage;
