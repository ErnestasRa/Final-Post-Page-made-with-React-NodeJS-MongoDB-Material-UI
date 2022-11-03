import * as React from "react";
import { Container, Paper } from "@mui/material";
import { get } from "../../functions/http";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/main-context";
import UsersCard from "./dumb-components/user-card";

const AllUsersComponent = () => {
  const { users, setUsers } = React.useContext(MainContext);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    const res = await get("allusers");
    if (!res.error) {
      setUsers(res);
    } else {
      navigate("/error");
    }
  };

  const viewProfile = (id, email) => {
    localStorage.setItem("userId", id);
    localStorage.setItem("userEmail", email);
    navigate("/viewprofile");
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          height: "100vh",
        }}
      >
        {users.map((user, i) => {
          return (
            <UsersCard
              email={user.email}
              firstName={user.firstName}
              image={user.image}
              lastName={user.lastName}
              key={i}
              viewProfile={() => viewProfile(user._id, user.email)}
            />
          );
        })}
      </Paper>
    </Container>
  );
};

export default AllUsersComponent;
