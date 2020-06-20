import React, { useState, useRef } from "react";
import yogamat from '../images/yogamat.jpg'
import { QnA } from './QnA'
import { EventCalendar } from './Calendar/EventCalendar';
import styled from 'styled-components';



const Wrapper = styled.div`
overflow-x: visible; 
// background-color: rgba(256,256,256,0.8);
background: white;
border-radius: 16px;
justify-content: center; 
width: 80%;
padding: 26px;
margin: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column; 
align-items: center;
@media(min-width: 900px){  
justify-content: left;
flex-direction: row;
flex-wrap: wrap;

`

const ClassCard = styled.div`
overflow-x: visible; 
background-color: rgba(256,256,256,0.8);
border-radius: 6px;
width: 80%;
padding: 26px;
margin: 20px 0;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media(min-width: 900px){  
  width: 46%;
  margin: 30px 24px; 
}
@media(min-width: 1024px){
  width: 40%;
}
`
const DetailsCard = styled(ClassCard)`
width: 40%;
@media(min-width: 900px){  
  width: 40%;}
  @media(min-width: 1024px){
    width: 30%;
  
}
`

const Text = styled.p`
font-size: 1.2rem;
padding: 16px 0;
`

const Dates = styled.h3`
margin-top: 16px; 
padding: 7px 0;`

const Button = styled.a`
width: 80%;
border-radius: 5px;
padding: 16px; 
text-align: center;
margin: 20px 0;
border: 2px solid white; 
background-color: #b4bb72; 
font-family: 'Barlow', sans-serif;
font-size: 1.8rem;
text-decoration: none; 
color: white; 

@media(min-width: 900px){  
  width: 40%;
  margin: 30px 24px; 
}
  @media(min-width: 1024px){
    width: 30%;
  
}
`
const Subheading = styled.h2`
font-family: 'Julius Sans One', sans-serif;
color: #666d21;
font-size: 2rem; 
margin-top: 26px; 
@media(min-width: 668px)and(max-width: 1024px) {
  
}
`



export const ThemeClasses = () => {
  return (

    <Wrapper>
      <ClassCard>
        <Subheading>TEMAKLASSER</Subheading>        <Text>
          Under hösten kommer jag att hålla
          temaklasser i Hathayoga en gång i månaden. Varje månad
          och klass har ett eget unikt tema.
          Samtliga klasser inleds med andningsteknik (pranayama)
          och centrering för att övergå i en kortare informativ del om
          aktuellt tema, olika positioner och deras effekter. Vi
          kommer gå igenom teknik och linjering för att sedan
          varsamt praktisera positionerna tillsammans. Vi avslutar
    med avslappning och i vissa fall med meditation. </Text>
      </ClassCard>
      <ClassCard>
        <h2>Temaklasser hösten 2020, på Studio Yogaheart </h2>
        <Dates>12 september (framåtfällningar)</Dates>
        <Dates>17 oktober (bakåtböjningar)</Dates>
        <Dates>7 november (höftöppnare)</Dates>
        <Dates>12 december (pranayama & meditation)</Dates>
      </ClassCard>
      <ClassCard>      <h2>Tid och pris:</h2>
        <Text><span style={{ fontWeight: "bold" }}>Tid: </span> 10:00 - 12:30</Text>
        <Text><span style={{ fontWeight: "bold" }}>Pris: </span> 290 kr/gång eller 1120 kr för samtliga</Text>
        <Text><span style={{ fontWeight: "bold" }}>Förkunskaper: </span> Inga.</Text>
      </ClassCard>
      <Button href="https://www.timecenter.se/yogaheart/boka/">Boka</Button>

    </Wrapper>

  )
}