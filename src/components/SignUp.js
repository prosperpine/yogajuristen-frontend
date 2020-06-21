import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user, login } from '../reducers/user';

// const URL = 'http://localhost:9001/users'
const URL = 'https://yogajuristen.herokuapp.com/users'


const Input = styled.input`
  padding: 0.5em;
  height: 3rem;
  font-size: 1rem; 
  color:  darkblue;
  background: #ebedf9;
  border: none;
  border-radius: 10px;
  margin: 16px; 
  @media(min-width: 668px) {
    font-size: 1.2rem;
   
  }
    
`;

const Button = styled.button`
  padding: 0.5em;
  height: 3rem;
  font-size: 1rem; 
  color:  grey; 
  background: #ebedf9;
  
  border-radius: 10px;
  &:hover {
    background: #b4bb72;
    color: white; 
    
  }
   
  @media(min-width: 668px) {
    font-size: 1.2rem;
   

  }
`

const Error = styled.h4`
color: white; 
`

export const SignUp = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    return () => {
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'content-Type': 'application/json' },
      })
        .then((res) => {
          if (res.ok) {
            setShowSummary(true);
            return res.json();
          } else {
            throw new Error('Unable to sign up');
          }
        })

        .then((json) => {
          dispatch(
            user.actions.setAccessToken({
              accessToken: json.accessToken,
            })
          );
          dispatch(user.actions.setUserId({ userId: json.userId }));
        })

        .catch((err) => {
          setErrorMessage('Username/email is already registered.', err);
          dispatch(user.actions.setErrorMessage({ errorMessage: err }));
        });
    };
  };

  return (
    <div>
      {!showSummary && (
        <form onSubmit={(e) => dispatch(handleSignup(e))}>
          <label>

            <Input
              placeholder="Namn"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label>

            <Input
              placeholder="Email"
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>

            <Input
              placeholder="Lösenord"
              type='password'
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <Button type='submit'>Registrera</Button>
          {errorMessage && <Error>{errorMessage}</Error>}
        </form>
      )}
      {showSummary && (
        <div>
          <p>
            You are now signed up! View <Link to='/Members'>members page</Link>
          </p>
        </div>
      )}

    </div>
  );
};
