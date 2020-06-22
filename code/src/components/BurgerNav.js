import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = styled.section`
  display: none;
    @media (max-width: 668px) {
      display: flex; 
      flex-flow: column nowrap;
      background-color: #f6faf7;
      position: fixed;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
    }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const Page = styled.p`
  color: #303e27;
  font-family: 'Julius Sans One', sans-serif;
  text-decoration: none; 
  margin-top: 18px; 
  padding-left: 16px;  
`;

export const BurgerNav = ({ open }) => {
  return (
    <Menu open={open}>
      <StyledLink to='/'>
        <Page>Hem</Page>
      </StyledLink>
      <StyledLink to='/About'>
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
    </Menu>
  )
}
