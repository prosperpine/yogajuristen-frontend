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
@media(min-width: 668px)and(max-width: 1024px) {
  
}
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
    fetch('http://localhost:9001/contact', {
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
      <Section>
        <TextCard><Title>Kontakta mig</Title><Text>Kontakta mig gärna för mer information,frågor eller bokningar!</Text>
          <Text><Icon icon={faEnvelope}></Icon> emelie@yogajuristen.se</Text>
          <Text><Icon icon={faPhone}></Icon> 070-5881482</Text>
          <a href="https://www.linkedin.com/in/emeliethyrfalk/"><i class="fab fa-linkedin-in" style={{ fontSize: '2rem', color: '#666d21', marginRight: '1rem' }}  ></i></a>
          <a href="https://www.facebook.com/Yogajuristen"><i class="fab fa-facebook-square" style={{ fontSize: '2rem', color: '#666d21' }}></i></a>
        </TextCard>
        <TextCard>
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label>Name</label>
              <input value={name} onChange={(event) => setName(event.target.value)}
                type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input value={email} onChange={(event) => setEmail(event.target.value)}
                type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea value={message} onChange={(event) => setMessage(event.target.value)}
                className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </TextCard>
      </Section>
    </Main >
  )
}
