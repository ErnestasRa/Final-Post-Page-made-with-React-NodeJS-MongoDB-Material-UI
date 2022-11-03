import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const UsersCard = ({ image, firstName, lastName, email, viewProfile }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30vh",
        height: "auto",
      }}
    >
      <CardMedia component="img" height="200vh" image={image} alt="none" />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => viewProfile()} size="small">
          View profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default UsersCard;
