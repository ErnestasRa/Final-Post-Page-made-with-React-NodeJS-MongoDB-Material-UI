import React from "react";
import { Typography, Link } from "@mui/material";

const CopyrightComponent = ({ link, text }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href={link}>
        {text}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyrightComponent;
