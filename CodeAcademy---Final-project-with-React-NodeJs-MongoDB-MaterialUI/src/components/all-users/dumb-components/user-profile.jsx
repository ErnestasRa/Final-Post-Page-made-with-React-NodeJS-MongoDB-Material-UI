import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import MainContext from "../../../context/main-context";

const UserProfileCard = ({
  image,
  firstName,
  lastName,
  email,
  onClick,
  inputRef,
  changeUserProfilePic,
  userProfileMessages,
  viewMessages,
}) => {
  const { toggle } = React.useContext(MainContext);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "40vh",
        mt: "10vh",
      }}
    >
      <CardMedia component="img" height="200" image={image} alt="none" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Button size="small" onClick={onClick}>
          Change picture
        </Button>
        <Box display={toggle}>
          <TextField
            id="standard-basic"
            inputRef={inputRef}
            label="New Url"
            variant="standard"
          />
          <Button onClick={() => changeUserProfilePic()}>Change</Button>
        </Box>
        <Button onClick={() => viewMessages()}>
          View messages ({userProfileMessages.length})
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserProfileCard;
