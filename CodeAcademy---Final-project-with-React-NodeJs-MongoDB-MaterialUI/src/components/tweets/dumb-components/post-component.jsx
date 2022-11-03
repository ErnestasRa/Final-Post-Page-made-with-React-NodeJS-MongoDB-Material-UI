import * as React from "react";
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

const PostComponent = ({
  firstName,
  lastName,
  image,
  tweet,
  likesCount,
  onClick,
  email,
  userImage,
  likeHeartIcon,
}) => {
  return (
    <Card
      sx={{ width: "50vh", display: "flex", flexDirection: "column", gap: 2 }}
    >
      <CardHeader
        titleTypographyProps={{ fontSize: "30px" }}
        avatar={<Avatar src={userImage} />}
        title={`${firstName} ${lastName}`}
        subheader={email}
      />
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="none"
        sx={{ objectFit: "scale-down" }}
      />
      <CardContent>
        <Typography variant="h5">{tweet}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => likeHeartIcon()}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <Typography color="text.secondary">{likesCount}</Typography>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button onClick={onClick}>View tweet</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostComponent;
