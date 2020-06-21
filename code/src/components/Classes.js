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
  flex-direction: column;
  color: #5e5e5e; 
  font-family: 'Barlow', sans-serif;
  
  background-size: cover;
`

const Wrapper = styled.div`
// overflow-x: visible; 
// // background: white;
// border-radius: 16px;
// justify-content: center; 
// width: 80%;
// padding: 26px;
// // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column; 
align-items: center;
// @media(min-width: 900px){  
// flex-direction: row;
// flex-wrap: wrap;

`

const TextCard = styled.div`
overflow-x: visible; 
// background-color: rgba(256,256,256,0.8);
background: white;
border-radius: 6px;
width: 80%;
padding: 30px;
margin: 20px 0;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media(min-width: 900px){  
  margin: 30px 24px; 
}
@media(min-width: 1024px){
}
`

const Text = styled.p`
font-size: 1.2rem;
padding: 16px 0;
`

const Title = styled.h2`
font-family: 'Julius Sans One', sans-serif;
color: #666d21;
font-size: 2.4rem; 
margin-top: 26px; 
@media(min-width: 668px)and(max-width: 1024px) {
  
}
`


export const Classes = () => {
  return (
    <main>
      <Section>
        <Wrapper>
          <TextCard><Title>Var yogar du med mig?</Title>
            <Text>För tillfället håller jag regelbundna klasser i hathayoga på Studio
            Yogaheart i Joanneberg, Göteborg. Se schema och boka <a href="https://www.timecenter.se/yogaheart/boka/">här</a>.
            <br /><br />
            På förfrågan håller jag även klasser privat. Därutöver erbjuder jag
            företagsyoga, yogaklasser i samband med konferenser, kick-offs,
            möhippor/svensexor/babyshowers, kalas, barnkalas osv.
            Jag erbjuder även personlig konsultation, s.k PTs.
            <br /><br />

För mer information, frågor eller bokning kontakta mig.</Text> </TextCard>
        </Wrapper>
        <ThemeClasses />

      </Section>
    </main>
  )
}
// background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${yogamat});