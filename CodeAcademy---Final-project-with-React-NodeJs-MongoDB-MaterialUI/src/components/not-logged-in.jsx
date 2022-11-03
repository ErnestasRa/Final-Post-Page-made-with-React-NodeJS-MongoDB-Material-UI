import * as React from "react";
import { Typography, Box, Link } from "@mui/material";

const NotLoggedInComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "5vh",
      }}
    >
      <Typography variant="h5">
        You need to be logged in to view this content. Sign in{" "}
        <Link href="/login">here</Link>
      </Typography>
    </Box>
  );
};

export default NotLoggedInComponent;
