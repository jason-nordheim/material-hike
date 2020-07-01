import React from "react";
import jwtDecode from "jwt-decode";
import { post, capitalize } from "../tools/helpers";
import { act } from "react-dom/test-utils";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTHENTICATED = "AUTHENTICATED";
export const ERROR = "ERROR";
export const UPDT_USR_FIELD = "USERNAME";
export const ACCOUNT_CREATED = "ACCOUNT CREATED";

export const AuthorizationAction = {
  logout: LOGOUT,
  login: LOGIN,
  Authenticated: AUTHENTICATED,
  error: ERROR,
  updateUserField: UPDT_USR_FIELD,
  accountCreated: ACCOUNT_CREATED,
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case LOGOUT: {
      window.localStorage.removeItem("token");
      return {
        ...state,
        user: {
          ...state.user,
          username: "",
          password: "",
        },
        isLoggedIn: false,
      };
    }
    case AUTHENTICATED: {
      window.localStorage.setItem("token", action.value);
      return {
        ...state,
        user: {
          ...state.user,
          password: "",
        },
        isLoading: false,
        isLoggedIn: true,
        token: action.value,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: "Incorrect username or password",
        isLoading: false,
        [action.field]: action.value,
      };
    }
    case UPDT_USR_FIELD: {
      console.log("field", action.field);
      console.log("value", action.value);
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.value,
        },
      };
    }
    case ACCOUNT_CREATED: {
      console.log("action", action.value);
      const { id, first, last, email, password_digest, bio } = action.value;
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true, 
        user: {
          ...state.user,
          id,
          first,
          last,
          email,
          password: null,
          password_digest,
          bio,
        },
      };
    }
    default:
      return state;
  }
};

export const getToken = () => window.localStorage.getItem("token");
export const getLoggedInUserFromToken = (token) => {
  const payload = jwtDecode(token);
  return payload.token;
};

const defaultState = {
  user: {
    id: -1,
    username: getToken() ? jwtDecode(getToken()).username : "",
    password: null,
    password_digest: "",
    email: null,
    first: null,
    last: null,
    bio: null,
  },
  isLoading: false,
  isLoggedIn: getToken() ? true : false,
  error: "",
  token: getToken() ? jwtDecode(getToken()).token : "",
};

const canSignUp = (state, dispatch) => {
  // first name
  if (!state.user.first) {
    dispatch({
      type: ERROR,
      field: "error",
      value: "first name is required ",
    });
    return false;
  }
  // last name
  if (!state.user.last) {
    dispatch({
      type: ERROR,
      field: "error",
      value: "last name is required ",
    });
    return false;
  }
  // username
  if (!state.user.username) {
    dispatch({
      type: ERROR,
      field: "error",
      value: "username is required ",
    });
    return false;
  }
  // email
  if (!state.user.email) {
    dispatch({
      type: ERROR,
      field: "error",
      value: "email is required ",
    });
    return false;
  }
  // password
  if (!state.user.password) {
    dispatch({
      type: ERROR,
      field: "error",
      value: "password is required ",
    });
    return false;
  }
  return true;
};

export const useAuthorization = (initialState = defaultState) => {
  const [state, dispatch] = React.useReducer(loginReducer, initialState);

  const login = async () => {
    const response = await post("/login", {
      username: state.user.username,
      password: state.user.password,
    });
    const data = await response.json();
    if (response.status === 200) {
      dispatch({ type: AUTHENTICATED, field: "token", value: data.token });
    } else {
      dispatch({ type: ERROR, field: "error", value: data.error });
    }
  };

  const signUp = async () => {
    if (!canSignUp(state, dispatch)) return;

    const sendData = {
      username: state.user.username,
      password: state.user.password,
      first: capitalize(state.user.first),
      last: capitalize(state.user.last),
      email: state.user.email,
      bio: state.user.bio,
    };

    const response = await post("/signup", sendData);
    const resData = await response.json();
    if (response.status === 200) {
      dispatch({ type: ACCOUNT_CREATED, value: resData.user[0] });
    } else {
      dispatch({ type: ERROR, field: "error", value: resData.user[0].error });
    }
  };

  console.log('stateC', state)
  return [state, dispatch, login, signUp];
};
