import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    userName: '',
    errorMessage: null,
    loggedoutMessage: null,
  },
};

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`User Id: ${userId}`);
      state.login.userId = userId;
    },
    setUserName: (state, action) => {
      const { userName } = action.payload;
      console.log(`username: ${userName}`);
      state.login.userName = userName;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      console.log(`Error Message: ${errorMessage}`);
      state.login.errorMessage = errorMessage;
    },
    setLoggedoutMessage: (state, action) => {
      const { loggedoutMessage } = action.payload;
      console.log(`You are logged out: ${loggedoutMessage}`);
      state.login.loggedoutMessage = loggedoutMessage;
    },
  },
});

export const login = (name, password) => {
  const LOGIN_URL = 'https://yogajuristen.herokuapp.com/sessions'
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((json) => { throw new Error(json) })
        }
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken
          })
        );
        dispatch(user.actions.setUserId({ userId: json.userId }));
        dispatch(
          user.actions.setUserName({
            userName: name
          })
        );
        dispatch(user.actions.setErrorMessage({ errorMessage: json.message }))
      })
      .catch((err) => {
        dispatch(user.actions.logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
    dispatch(user.actions.setUserName({ userName: '' }));
    dispatch(user.actions.setLoggedoutMessage({ loggedoutMessage: true }));
  };
};
