import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  @media(min-width:667px){ 
   padding: 30px 100px;
}
 
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Page = styled.h2`
  color: white;
  font-family: 'Julius Sans One', sans-serif;
  text-decoration: none; 
  display: none;
  @media (min-width: 667px) {
    display: flex; 
    font-size: 1rem;
  }
  @media (min-width: 900px) {
    font-size: 1.4rem;
    
  }
`;

const Hamburger = styled.div`
  @media(min-width:667px){ 
    display: none;
}
`

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
      {/* <NavbarDropdown>
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
      </NavbarDropdown> */}
      <Hamburger>
        <FontAwesomeIcon icon={faBars} color="white" size="2x" />
      </Hamburger>




    </Section>
  );
};
