import React from "react";
import {
  Button,
  Box,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";
import { useAuthorization, AuthorizationAction } from '../hooks/useAuthorization'

const LoginPage = () => {
  const classes = useStyles();
  const [authState, authDispatch, login] = useAuthorization();

  const handleLogin = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <Box className={classes.screen}>
      <Typography className={classes.screenTitle}>H1k3r</Typography>
      <Box className={classes.userAccountFormContainer}>
        <Box className={classes.spacer} />

        <Box className={classes.logoContainer}>
          <img
            src={require("../images/man-in-hike-svgrepo-com.svg")}
            alt="h1k3r"
            width="100%"
          />
        </Box>

        <Box className={classes.spacer} />

        {authState.error && (
          <Typography variant="body2" style={{ color: "red" }}>
            {authState.error} hello
          </Typography>
        )}

        <Box className={classes.userAccountForm}>
          <FormControl className={classes.userAccountInputField}>
            <TextField
              fullWidth
              htmlFor="username"
              id="component-simple"
              label="username"
              onChange={(e) =>
                authDispatch({
                  type: AuthorizationAction.field,
                  field: "username",
                  value: e.currentTarget.value,
                })
              }
            />
          </FormControl>
          <FormControl className={classes.userAccountInputField}>
            <TextField
              fullWidth
              id="standard-basic"
              label="password"
              type="password"
              onChange={(e) =>
                authDispatch({
                  type: AuthorizationAction.field,
                  field: "password",
                  value: e.currentTarget.value,
                })
              }
            />
          </FormControl>

          <Box className={classes.spacer} />

          <FormControl>
            <Button
              variant="contained"
              onClick={handleLogin}
              disabled={authState.isLoading}
            >
              {authState.isLoading ? "Logging in..." : "Log In"}
            </Button>
          </FormControl>

          <Box className={classes.spacer} />

          {/* <FormControl>
            <Button
              variant="contained"
              onClick={handleSignUp}
              disabled={isLoading}
            >
              Sign Up
            </Button>
          </FormControl> */}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
