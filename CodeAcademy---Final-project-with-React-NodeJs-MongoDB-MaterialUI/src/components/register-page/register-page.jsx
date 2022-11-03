import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { get, post } from "../../functions/http";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

const RegisterPageComponent = () => {
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const nameRef = React.useRef();
  const surnameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const passwordConfirmRef = React.useRef();
  const navigate = useNavigate();

  const registerUser = async () => {
    const data = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: passwordConfirmRef.current.value,
    };

    const res = await post("register", data);
    if (res.error) {
      setErrorMessage(res.message);
      setError(true);
    } else {
      setError(false);
    }

    if (!res.error) {
      navigate("/login");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={error}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={nameRef}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={error}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputRef={surnameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error}
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                  inputRef={passwordConfirmRef}
                />
              </Grid>
            </Grid>
            <Typography sx={{ color: "red" }}>{errorMessage}</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={registerUser}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterPageComponent;
