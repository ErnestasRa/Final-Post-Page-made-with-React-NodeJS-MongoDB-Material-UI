import { Container, Paper } from "@mui/material";
import * as React from "react";
import ResponsiveAppBar from "../../components/app-bar";
import StickyFooter from "../../components/footer-component";
import LogOutComponent from "../../components/log-out";
import { get } from "../../functions/http";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    const res = await get("logout");
    if (!res.error) {
      navigate("/");
    }
  };

  React.useEffect(() => {
    logOut();
  }, []);

  return (
    <Container>
      <ResponsiveAppBar />
      <Paper>
        <LogOutComponent />
      </Paper>
      <StickyFooter />
    </Container>
  );
};

export default LogOut;
