import * as React from "react";
import { Container, Paper } from "@mui/material";
import MainPageComponent from "../../components/main-page/main-page";
import ResponsiveAppBar from "../../components/app-bar";
import StickyFooter from "../../components/footer-component";
import colorBackground from "../../styles/colors";

const MainPage = () => {
  return (
    <Container sx={{ background: colorBackground.background.secondary.main }}>
      <Paper
        sx={{
          background: colorBackground.background.secondary.main,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <ResponsiveAppBar />
        <MainPageComponent />
        <StickyFooter />
      </Paper>
    </Container>
  );
};

export default MainPage;
