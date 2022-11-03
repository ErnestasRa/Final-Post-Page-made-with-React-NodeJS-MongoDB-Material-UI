import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SingleTweetComponent = ({
  image,
  firstName,
  lastName,
  tweet,
  onClick,
  likeComment,
}) => {
  return (
    <Card
      sx={{
        width: "50vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: "5vh",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {firstName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tweet}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button size="small" onClick={onClick}>
          Add comment
        </Button>
        <Button size="small" onClick={() => likeComment()}>
          Like
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleTweetComponent;
