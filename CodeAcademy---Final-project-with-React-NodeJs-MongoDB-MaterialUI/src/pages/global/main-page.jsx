import * as React from "react";
import { Container, Paper } from "@mui/material";
import MainPageComponent from "../../components/main-page/main-page";
import ResponsiveAppBar from "../../components/app-bar";
import StickyFooter from "../../components/footer-component";
import colorBackground from "../../styles/colors";
import CssBaseline from "@mui/material/CssBaseline";

const MainPage = () => {
  return (
    <Container>
      <CssBaseline
        sx={{ background: colorBackground.background.secondary.main }}
      >
        <Paper
          elevation={3}
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
      </CssBaseline>
    </Container>
  );
};

export default MainPage;
