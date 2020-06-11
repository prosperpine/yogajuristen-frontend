import React, { useState, useRef } from "react";
import yogamat from '../images/yogamat.jpg'
import { QnA } from './QnA'
import { ThemeClasses } from './ThemeClasses'
import styled from 'styled-components';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const Section = styled.section`
  display: flex; 
 
  height: 100vh; 
  align-items: center; 
  flex-direction: column;
  color: #5e5e5e; 
  font-family: 'Barlow', sans-serif;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${yogamat});
  background-size: cover;
`
export const Classes = () => {
  return (
    <Section>

      <ThemeClasses />


      <QnA />
    </Section>
  )
}