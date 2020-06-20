import React, { useState } from 'react'
import emailjs from 'emailjs-com';

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
  )
}
