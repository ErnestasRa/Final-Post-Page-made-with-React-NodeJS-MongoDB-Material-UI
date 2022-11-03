import * as React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import MainContext from "../../context/main-context";

const ViewMessagesComponent = ({ deleteMessage }) => {
  const { userProfileMessages } = React.useContext(MainContext);

  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vh",
          height: "100%",
          mt: "5vh",
        }}
      >
        {userProfileMessages.map((message, i) => {
          return (
            <Box
              key={i}
              sx={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="caption">from: {message.email}</Typography>{" "}
              <Typography variant="button">{`${message.firstName} ${message.lastName}`}</Typography>
              <Typography>{message.message[0]}</Typography>
              <Button size="small" onClick={() => deleteMessage(message._id)}>
                Delete message
              </Button>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

export default ViewMessagesComponent;
