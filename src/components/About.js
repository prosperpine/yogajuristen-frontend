import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { user, login, logout } from '../reducers/user';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import { MembersPage } from './MembersPage';

export const About = () => {
  return <MembersPage />;
};
