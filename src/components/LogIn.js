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
 
`
const LogInCard = styled.div`
overflow-x: visible; 
display: flex;
flex-direction: column; 
 align-items: center;
background-color: rgba(256,256,256,0.8);
border-radius: 16px;
width: 70%;
padding: 40px; 
  margin: 40px; 
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media(min-width: 668px){
  flex-direction: column; 
  width: 70%;   
}
@media(min-width: 1024px){
  width: 60%;
  flex-direction: column; 
}
`
const SignUpCard = styled.form`
display: flex;
 align-items: center;
flex-direction: column; 
justify-content: space-between;
overflow-x: visible; 
background-color: rgba(0,0,0,0.2);
width: 70%;
border-radius: 16px;
padding: 40px; 
margin: 40px;

box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

@media(min-width: 668px)and(max-width: 1024px){
  flex-direction: row; 
  width: 70%;    
}
@media(min-width: 1024px){
  
  
 
}
    
`
const Label = styled.label`


`
const Text = styled.p`
font-size: 1.4rem;
color: white; 
@media(min-width: 668px) {
font-size: 1.8rem;
}
`
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
  border: lightgrey;
  border-radius: 10px;
  &:hover {
    background: #b4bb72;
    color: white; 
  }
  @media(min-width: 668px) {
    font-size: 1.2rem;
  }
`



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
            <LogInCard>
              <form onSubmit={handleLogin}>

                <Label>

                  <Input
                    placeholder="Logga in med ditt namn"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </Label>
                <Label>

                  <Input
                    placeholder="Lösenord"
                    type='password'
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Label>

                <Button type='submit'>Logga in</Button>
              </form>
            </LogInCard>
            <SignUpCard>
              <Text>Bli medlem på Yogajuristen!<br></br>
            Som medlem får du bland annat tillgång till separata filmklipp av
            yogasekvenser, meditation, andning, motivation osv. Som
            medlem kommer du även få del av olika erbjudanden från tid till
            tid.
              </Text>
              <SignUp />
            </SignUpCard>
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
