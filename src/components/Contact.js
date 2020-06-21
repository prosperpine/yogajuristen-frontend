import React, { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import lake from '../images/lake.jpg'




const Main = styled.main`
background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${lake});
background-size: cover;
display: flex; 
justify-content: center;

`
const Section = styled.section`
width: 80%; 
border-radius:10px;
background: white; 
font-family: 'Barlow', sans-serif;
font-size: 1.2rem; 
padding: 22px; 
margin: 24px;
display: flex; 
flex-direction: column;
align-items: center;
`

const TextCard = styled.div`
display: flex;
align-items: center;
flex-direction: column;
overflow-x: visible; 
background: white;
border-radius: 6px;
width: 70%;
padding: 40px;
margin: 20px 0;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media(min-width: 900px){  
  margin: 30px 24px; 
  width: 60%;
}

`

const Article = styled.div`
display: flex; 
flex-direction: column; 
@media(min-width: 900px){
  flex-direction: row; 
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
@media(min-width: 668px)and(max-width: 1024px) {
  
}
`
const Input = styled.input`
  padding: 0.5em;
  height: 3rem; 
  font-size: 1rem; 
  color:  darkblue;
  background: #ebedf9;
  border: none;
  border-radius: 10px;
  margin: 16px; 
  @media(min-width: 668px) {
    font-size: 1.2rem;
  }   
`

const Textarea = styled.textarea`
font-family: Arial;
padding: 0.5em;
height: 3rem; 
font-size: 1rem; 
color:  darkblue;
background: #ebedf9;
border: none;
border-radius: 10px;
margin: 16px; 
@media(min-width: 668px) {
  font-size: 1.2rem;
} 
`

const Button = styled.button`
margin: 16px; 
padding: 10px 20px;
  border: solid 2px darkgrey;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background: none;
  &:hover {
    background-color:#666d21;
    color: white;
  }
`
const Details = styled.div`
display: flex;
flex-direction: column;
margin-left: 16px;
`

const Icon = styled(FontAwesomeIcon)`
font-size: 2rem;
color: #666d21;
`

export const Contact = () => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // fetch('http://localhost:9001/contact', {
    fetch('https://yogajuristen.herokuapp.com/contact', {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          console.log('error')
        } else {
          return res.json()
        }
      })
      .then((response) => {
        if (response.status === 'success') {
          alert("Tack för ditt meddelande. Jag kommer att svara så snart jag kan!");
        } else if (response.status === 'fail') {
          alert("Det gick tyvärr inte att skicka meddelandet.")
        }
      })
      .then(() => {
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((err) => console.log('errors', err))
  }

  return (
    <Main>
      <TextCard>
        <Title>Kontakta mig</Title><Text>Kontakta mig gärna för mer information, frågor eller bokningar!</Text>
        <Article>
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div>
              <Input
                required
                value={name}
                placeholder='Ditt namn'
                onChange={(event) => setName(event.target.value)}
                type="text" />
            </div>
            <div>
              <Input
                required
                value={email}
                placeholder='Din email'
                onChange={(event) => setEmail(event.target.value)}
                type="email" />
            </div>
            <div>
              <Textarea
                required
                type="textarea"
                value={message}
                placeholder='Meddelande'
                onChange={(event) => setMessage(event.target.value)}
              ></Textarea>
            </div>
            <Button type="submit">Skicka</Button>
          </form>
          <Details><Text><Icon icon={faEnvelope}></Icon> emelie@yogajuristen.se</Text>
            <Text><Icon icon={faPhone}></Icon> 070-5881482</Text>
            <div><a href="https://www.linkedin.com/in/emeliethyrfalk/"><i class="fab fa-linkedin-in" style={{ fontSize: '2rem', color: '#666d21', marginRight: '1rem' }}  ></i></a>
              <a href="https://www.facebook.com/Yogajuristen"><i class="fab fa-facebook-square" style={{ fontSize: '2rem', color: '#666d21' }}></i></a></div>
          </Details></Article>
      </TextCard>
    </Main >
  )
}
