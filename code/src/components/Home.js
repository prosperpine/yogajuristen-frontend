import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import warrior from '../images/warrior.jpg'

const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${warrior});
  height: 770px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  position: static;
`;

const HeroText = styled.div`
  text-align: center;
  padding-top: 100px;
    @media(min-width: 668px){
      position: absolute;
      left: 70px;
    }
`

const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 2.4rem;
  color: #303e27;
`

const HeroButton = styled.div`
  border: solid 2px #303e27;
  border-radius: 10px;
  display: inline-block;
  padding: 20px 50px;
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
  background-color: #303e27;
 
  }
`
const LogInLink = styled(Link)`
  font-family: Arial; 
  color: #303e27;
  text-decoration: none;
    &:hover {
      color: white;}
  
`

export const Home = () => {
  return (
    <HeroImage>
      <HeroText>
        <Title>Välkommen till din andning.</Title>
        <HeroButton><LogInLink to='/LogIn'>Logga in</LogInLink></HeroButton>
      </HeroText>
    </HeroImage>
  );
};
