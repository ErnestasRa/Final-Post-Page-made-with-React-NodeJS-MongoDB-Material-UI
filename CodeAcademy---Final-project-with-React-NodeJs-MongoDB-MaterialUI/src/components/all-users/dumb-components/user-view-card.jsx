import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import MainContext from "../../../context/main-context";

const UserViewCard = ({
  email,
  firstName,
  image,
  lastName,
  viewComments,
  viewTweets,
  sendMessage,
  messageRef,
}) => {
  const { toggle, setToggle } = React.useContext(MainContext);

  const toggleVisibility = () => {
    if (toggle === "visible") {
      setToggle("none");
    } else {
      setToggle("visible");
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        width: "30vh",
        mt: "5vh",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
        }}
      >
        <Button onClick={() => viewComments()} size="small">
          View Comments
        </Button>
        <Button onClick={() => viewTweets()} size="small">
          View Tweets
        </Button>
        <Button size="small" onClick={toggleVisibility}>
          Send message
        </Button>
        <Box display={toggle} sx={{ flexDirection: "column" }}>
          <TextField
            id="standard-basic"
            label="Message"
            variant="standard"
            size="small"
            inputRef={messageRef}
          />
          <Button onClick={() => sendMessage()}>Send</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default UserViewCard;
