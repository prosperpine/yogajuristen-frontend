import React from 'react';
import styled from 'styled-components';

const Background = styled.section`
  background-color: #f5efe8;
  border-top: 1px solid darkgrey; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 100px; 
`

export const Footer = () => {
  return (
    <Background>
      ©2020 Emelie Thyrfalk • Yogajuristen •
    </Background>
  )
}