import React, { useState } from 'react';
import styled from 'styled-components';
import lake from '../images/lake.jpg'
import { ThemeClasses } from './ThemeClasses';

const Section = styled.section`
background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${lake});
height: 100vh; 
background-size: cover;



`



export const About = () => {
  return (
    <Section>
      HEllO
    </Section>
  )
};
