import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Page = styled.h2`
  color: white;
  font-size: 2rem;
  font-family: 'Julius Sans One', sans-serif;
  text-decoration: none; 
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px;
`;

const Hamburgerline = styled.div`
  width: 30px;
  height: 4px;
  background-color: #fff;
  border-radius: 5px;
`;

const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

const NavbarDropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${NavbarDropdownContent} {
    display: inline-block;
    padding: 10px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Navigation = () => {
  // const handleClick = (action) => {
  //   if (!action) return;

  //   if (this.props.onClick) this.props.onClick(action);
  // };
  return (
    <Section>
      <StyledLink to='/'>
        <Page>Hem</Page>
      </StyledLink>

      <StyledLink to='/About'>
        {' '}
        <Page>Om mig</Page>
      </StyledLink>
      <StyledLink to='/Classes'> <Page>Klasser</Page></StyledLink>

      <StyledLink to='/Reviews'>
        <Page>Recensioner</Page>
      </StyledLink>
      <StyledLink to='/Members'>
        <Page> Logga in</Page>
      </StyledLink>
      <Page>Kontakta</Page>
      <NavbarDropdown>
        <Hamburger>
          <Hamburgerline></Hamburgerline>
          <Hamburgerline></Hamburgerline>
          <Hamburgerline></Hamburgerline>
        </Hamburger>{' '}
        <NavbarDropdownContent>
          <a to='/'>Dropdown here</a>
          <a to='/'>Dropdown here</a>
          <a to='/'>Dropdown here</a>
        </NavbarDropdownContent>
      </NavbarDropdown>
    </Section>
  );
};
