import * as React from "react";
import { Box, Typography } from "@mui/material";
import MainContext from "../../context/main-context";

const ViewMessagesComponent = () => {
  const { userProfileMessages } = React.useContext(MainContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {userProfileMessages.map((message, i) => {
        return (
          <Box key={i} sx={{ border: "1px solid black", gap: 2 }}>
            <Typography variant="caption">{message.email}</Typography>{" "}
            <Typography variant="button">{`${message.firstName} ${message.lastName}`}</Typography>
            <Typography>{message.message[0]}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ViewMessagesComponent;
