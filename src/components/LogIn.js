import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user, login, getLoginMessage } from '../reducers/user';
import { SignUp } from './SignUp';
import mountains from '../images/mountains.jpg';


const Cards = styled.section`
  display: flex; 
  height: 100vh; 
  align-items: center; 
  flex-direction: column;
  color: #5e5e5e; 
  font-family: 'Barlow', sans-serif;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${mountains});
  background-size: cover;
  margin-bottom: 40px; 
`
const LogInCard = styled.form`
display: flex;
 align-items: center;
flex-direction: column; 
justify-content: space-between;
border-radius: 16px; 
background-color: white;
width: 70%
height: 30%;
margin: 50px;
padding: 20px; 
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
font-size: 1.8rem;
@media(min-width: 668px) {
  flex-direction: row; 
  width: 80%; 
  height: 20%; 
}
  
   
`
const SignUpCard = styled.form`
display: flex;

border: 2px solid white; 
border-radius: 16px; 
background-color: white;
width: 50%; 
height: 20%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`
const Label = styled.label`
display: flex; 
flex-direction: column; 
`
const Text = styled.p`
margin-bottom: 16px;
`
const Input = styled.input`
  padding: 0.5em;
  height: 3rem;
  font-size: 1rem; 
  color:  darkblue;
  background: #f6faf7;
  border: none;
  border-radius: 3px;
  margin-bottom: 16px;
  @media(min-width: 668px) {
    font-size: 1.2rem;
  }
    
`;


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
  const [password, setPassword] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(name, password));
  };

  if (!accessToken) {
    return (
      <section>
        {!showSummary && (
          <Cards>
            <LogInCard onSubmit={handleLogin}>

              <Label>
                <Text>Namn</Text>
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </Label>
              <Label>
                <Text> Lösenord</Text>
                <Input
                  type='password'
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Label>

              <button type='submit'>LOG IN</button>
            </LogInCard>

            <SignUpCard> <p>
              Are you not a member yet? Please{' '}
              <SignUp />
            </p></SignUpCard>
          </Cards>
        )}



        {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
        {loggedoutMessage && <h4>you are now logged out!</h4>}
      </section>
    );
  } else {
    return (
      <div>
        <p>You have logged in!</p>;<p>{logInMessage}</p>
      </div>
    );
  }
};
