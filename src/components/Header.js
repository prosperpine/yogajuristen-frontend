import React from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation.js';

const Section = styled.main`
  background-color: #303960;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: 'Julius Sans One', sans-serif;
  color: white;
  font-size: 3rem;
  text-align: center;
  padding-top: 40px;
`;

export const Header = () => {
  return (
    <Section>
      <Title>YOGAJURISTEN</Title>
      <Navigation />
    </Section>
  );
};
