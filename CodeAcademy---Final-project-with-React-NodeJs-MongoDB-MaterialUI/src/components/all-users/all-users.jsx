import * as React from "react";
import { Box, Container, Paper, TextField } from "@mui/material";
import { get } from "../../functions/http";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/main-context";
import UsersCard from "./dumb-components/user-card";

const AllUsersComponent = () => {
  const { users, setUsers } = React.useContext(MainContext);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const searchRef = React.useRef();
  const navigate = useNavigate();

  const filterUsers = () => {
    const searchField = searchRef.current.value;
    const filterUsers = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchField)
    );
    setFilteredUsers(filterUsers);
  };

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
          flexDirection: "column",
          gap: 2,
          height: "auto",
        }}
      >
        <TextField
          id="standard-basic"
          label="Search users..."
          inputRef={searchRef}
          onChange={filterUsers}
          variant="standard"
          size="small"
          sx={{ width: "30vh" }}
        />

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, height: "100%" }}>
          {filteredUsers.length === 0
            ? users.map((user, i) => {
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
              })
            : filteredUsers.map((user, i) => {
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
        </Box>
      </Paper>
    </Container>
  );
};

export default AllUsersComponent;
