import React, { useState, useRef } from "react";
import yogamat from '../images/yogamat.jpg'
import { QnA } from './QnA'
import { ThemeClasses } from './ThemeClasses'
import styled from 'styled-components';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const Section = styled.section`

  display: flex; 
  justify-content:center; 
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${yogamat});
 align-items: center; 

  color: #5e5e5e; 
  font-family: 'Barlow', sans-serif;
  
  background-size: cover;
`
export const Classes = () => {
  return (
    <main>
      <Section>

        <ThemeClasses />
      </Section>
    </main>
  )
}
// background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${yogamat});