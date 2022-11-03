import * as React from "react";
import { styled } from "@mui/material/styles";
import { blue, lightBlue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
const today = new Date();

const PostComponent = ({
  firstName,
  lastName,
  image,
  tweet,
  likesCount,
  onClick,
  email,
  userImage,
}) => {
  return (
    <Card
      sx={{ width: "50vh", display: "flex", flexDirection: "column", gap: 2 }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "lightblue" }} aria-label="recipe">
            {firstName.charAt(0)}
          </Avatar>
        }
        title={`${firstName} ${lastName}`}
        subheader={email}
      />
      <Typography>{today.getFullYear()}</Typography>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="none"
        sx={{ objectFit: "scale-down" }}
      />
      <CardContent>
        <Typography variant="body2">{tweet}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography color="text.secondary">
          Likes count: {likesCount}
        </Typography>
        <Box>
          <Button onClick={onClick}>View tweet</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostComponent;
