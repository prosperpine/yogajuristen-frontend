import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  box-sizing: border-box;
`;

const Page = styled.h2`
  color: white;
  font-size: 2rem;
  font-family: 'Julius Sans One', sans-serif;
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
      <Link to='/'>
        <Page>Home</Page>
      </Link>

      <Link to='/About'>
        {' '}
        <Page>About</Page>
      </Link>

      <Page>Classes</Page>
      <Link to='/Reviews'>
        <Page>Reviews</Page>
      </Link>
      <Link to='/Members'>
        <Page> Members</Page>
      </Link>
      <Page>Contact</Page>
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
