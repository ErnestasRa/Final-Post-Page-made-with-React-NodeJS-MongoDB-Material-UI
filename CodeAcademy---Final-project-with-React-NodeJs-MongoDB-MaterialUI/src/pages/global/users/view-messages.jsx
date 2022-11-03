import * as React from "react";
import StickyFooter from "../../../components/footer-component";
import ResponsiveAppBar from "../../../components/app-bar";
import { Container, Paper } from "@mui/material";
import ViewMessagesComponent from "../../../components/all-users/view-messages-component";
import MainContext from "../../../context/main-context";
import { get } from "../../../functions/http";
import { useNavigate } from "react-router-dom";

const ViewMessages = () => {
  const { setUserProfileMessages } = React.useContext(MainContext);
  const navigate = useNavigate();

  const getUserProfileInfo = async () => {
    const res = await get("loggedinuser");

    if (!res.error) {
      setUserProfileMessages(res.data.privateMessages);
    } else {
      navigate("/notloggedin");
    }
  };

  React.useEffect(() => {
    getUserProfileInfo();
  }, []);

  return (
    <Container>
      <ResponsiveAppBar />
      <Paper sx={{ height: "100vh" }}>
        <ViewMessagesComponent />
      </Paper>
      <StickyFooter />
    </Container>
  );
};

export default ViewMessages;
