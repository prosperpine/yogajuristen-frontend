import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { user, login, logout } from '../reducers/user';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import { MembersPage } from './MembersPage';

export const MembersLogin = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.user.login.accessToken);
  const loggedoutMessage = useSelector(
    (store) => store.user.login.loggedoutMessage
  );
  if (!accessToken) {
    return (
      <div>
        <LogIn />
      </div>
    );
  } else {
    return (
      <div>
        <MembersPage />
      </div>
    );
  }
};
