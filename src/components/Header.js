import React from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation.js';

const Section = styled.main`
  background-color: #b4bb72;
  box-sizing: border-box;
  
  margin-top: 0;
`;

const Title = styled.h1`
  font-family: 'Julius Sans One',sans-serif;
  margin: 0;
  font-weight: 400;
  color: white;
  font-size: 5rem;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
`;

export const Header = () => {
  return (
    <Section>
      <Title>YOGAJURISTEN</Title>
      <Navigation />
    </Section>
  );
};
