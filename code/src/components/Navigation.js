import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import { HamburgerIcon } from './HamburgerIcon'

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
    @media(min-width: 667px) and (max-width: 1024px){ 
      padding: 30px 
    }
    @media(min-width: 1025px){
      padding: 30px 80px;
    }
`;

const LogInLink = styled(Link)`
  position: fixed;
  top: 15px;
  left: 20px; 
  color: white;
  font-weight: bold; 
  font-size: 1.4rem;
  text-decoration: none;
  &:hover {
    color: #303e27;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Page = styled.h2`
  color: white;
  font-family: 'Julius Sans One', sans-serif;
  text-decoration: none; 
  display: none;
  &:hover {
    color: #303e27;
  }
    @media (min-width: 668px) {
      display: flex; 
      font-size: 1rem;
    }
    @media (min-width: 900px) {
      font-size: 1.8rem;
    }
`;

export const Navigation = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const dispatch = useDispatch();

  return (
    < Section id="myTopnav" >
      <StyledLink to='/'>
        <Page>Hem</Page>
      </StyledLink>
      <StyledLink to='/About'>
        {' '}
        <Page>Om mig</Page>
      </StyledLink>
      <StyledLink to='/Classes'>
        <Page>Klasser</Page>
      </StyledLink>
      <StyledLink to='/Reviews'>
        <Page>Recensioner</Page>
      </StyledLink>
      <StyledLink to='/Members'>
        <Page>Medlemmar</Page>
      </StyledLink>
      <StyledLink to='/Contact'>
        <Page>Kontakta</Page>
      </StyledLink>

      {accessToken ? (<LogInLink to='/' onClick={(e) => dispatch(logout())}>Logga ut</LogInLink>) : (<LogInLink to='/LogIn'>Logga in</LogInLink>)}
      <HamburgerIcon />
    </Section >
  );
}

