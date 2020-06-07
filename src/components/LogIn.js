import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user, login, getLoginMessage } from '../reducers/user';
import { SignUp } from './SignUp';

// const URL = 'http://localhost:8080/users';
// const URL = 'https://project-authorize.herokuapp.com/users';

export const LogIn = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const loggedoutMessage = useSelector(
    (store) => store.user.login.loggedoutMessage
  );
  const logInMessage = useSelector(
    (store) => store.user.login.loggedoutMessage
  );
  const errorMessage = useSelector(
    (store) => store.user.login.errorMessage
  );
  const [name, setName] = useState('');
  //const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showSummary, setShowSummary] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(name, password));
  };

  if (!accessToken) {
    return (
      <div>
        {!showSummary && (
          <form onSubmit={handleLogin}>
            <label>
              username
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            {/* <label>
              email
              <input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label> */}
            <label>
              password
              <input
                type='password'
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

            <button type='submit'>LOG IN</button>
          </form>
        )}


        <p>
          Are you not a member yet? Please{' '}
          <Link to='/Signup'>
            <p>sign up!</p>
          </Link>
        </p>
        {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
        {loggedoutMessage && <h4>you are now logged out!</h4>}
      </div>
    );
  } else {
    return (
      <div>
        <p>You have logged in!</p>;<p>{logInMessage}</p>
      </div>
    );
  }
};
