import React from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation.js';

const Section = styled.main`
  font-family: 'Julius Sans One',sans-serif;
  background-color: #b4bb72;
  margin-top: 0;
  overflow-hidden: visible;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 400;
  color: white;
  font-size: 2.6rem;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
    @media (min-width: 667px) and (max-width: 1024px){
      font-size: 3.8rem;
    }
    @media (min-width: 1025px) {
      font-size: 5rem;
    }
`;

export const Header = () => {
  return (
    <Section>
      <Title>YOGAJURISTEN</Title>
      <Navigation />
    </Section>
  );
};
