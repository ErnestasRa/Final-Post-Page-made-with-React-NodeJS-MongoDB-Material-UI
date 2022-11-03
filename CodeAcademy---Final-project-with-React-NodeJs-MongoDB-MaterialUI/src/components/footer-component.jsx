import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CopyrightComponent from "./copyright-component";

const StickyFooter = () => {
  return (
    <>
      <CssBaseline />
      <Box
        position={"static"}
        component="footer"
        sx={{
          left: 0,
          bottom: 0,
          right: 0,
          mt: "3vh",
          height: "10vh",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <CopyrightComponent
            link={"https://codeacademy.lt"}
            text={"CodeAcademy"}
          />
        </Container>
      </Box>
    </>
  );
};

export default StickyFooter;
