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

const SignUpPage = (props) => {
  const classes = useStyles();
  const [authState, authDispatch, login, signUp] = useAuthorization() 

  const handleSignUp = (event) => {
    event.preventDefault();
    signUp();
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
            {authState.error}
          </Typography>
        )}

        <Box className={classes.userAccountForm}>
          <FormControl className={classes.userAccountInputField}>
            <TextField
              fullWidth
              htmlFor="first"
              id="component-simple"
              label="first name"
              onChange={(e) =>
                authDispatch({
                  type: AuthorizationAction.updateUserField,
                  field: "first",
                  value: e.currentTarget.value,
                })
              }
            />
            <FormControl className={classes.userAccountInputField}>
              <TextField
                fullWidth
                htmlFor="last"
                id="component-simple"
                label="last name"
                onChange={(e) =>
                  authDispatch({
                    type: AuthorizationAction.updateUserField,
                    field: "last",
                    value: e.currentTarget.value,
                  })
                }
              />
            </FormControl>
          </FormControl>
          <FormControl className={classes.userAccountInputField}>
            <TextField
              fullWidth
              htmlFor="username"
              id="component-simple"
              label="username"
              onChange={(e) =>
                authDispatch({
                  type: AuthorizationAction.updateUserField,
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
                  type: AuthorizationAction.updateUserField,
                  field: "password",
                  value: e.currentTarget.value,
                })
              }
            />
          </FormControl>
          <FormControl className={classes.userAccountInputField}>
            <TextField
              fullWidth
              htmlFor="email"
              id="component-simple"
              label="email"
              onChange={(e) =>
                authDispatch({
                  type: AuthorizationAction.updateUserField,
                  field: "email",
                  value: e.currentTarget.value,
                })
              }
            />
          </FormControl>

          <Box className={classes.spacer} />

          {/* <FormControl>
            <Button
              variant="contained"
              onClick={handleLogin}
              disabled={authState.isLoading}
            >
              {authState.isLoading ? "Logging in..." : "Log In"}
            </Button>
          </FormControl>

          <Box className={classes.spacer} /> */}

          <FormControl>
            <Button
              variant="contained"
              onClick={handleSignUp}
              disabled={authState.isLoading}
            >
              {authState.isLoading ? "Please wait..." : "Sign Up"}
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
