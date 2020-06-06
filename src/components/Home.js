import React, { useState } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import warrior from '../images/warrior.jpg'

const FrontPagePicture = styled.img`
width: 100%;
height: auto;
`
const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${warrior});
  height: 770px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  position: relative;
`;

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 75px;
  left: 215px;
  transform: translate(-50 %, -50 %);
  
`

const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 4rem;
  color: #303e27;
`


const HeroButton = styled.div`
  border: solid 2px #303e27;
  border-radius: 10px;
  display: inline-block;
  padding: 20px 50px;
  text-align: center;
  cursor: pointer;
  &:hover {
  background-color: #303e27;
  color: white;
  }
`

export const Home = () => {
  return (
    <HeroImage>
      <HeroText>
        <Title>Välkommen till din andning.</Title>
        <HeroButton>Logga in</HeroButton>
      </HeroText>
    </HeroImage>

  );
};
