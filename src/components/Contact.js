import React, { useState } from 'react'
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [feedback, setFeedback] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (event) => {
    setFeedback()
    setName()
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  const handleSubmit = () => {
    const templateId = 'template_1YsBvThp';

    sendFeedback(templateId, { message_html: feedback, from_name: name, reply_to: email })
  }

  return (
    <form className="test-mailing">
      <h1>Let's see if it works</h1>
      <div>
        <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={handleChange}
          placeholder="Post some lorem ipsum here"
          required
          value={feedback}
          style={{ width: '100%', height: '150px' }}
        />
        <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={handleChange}
          value={name} />
      </div>
      <input type="button" value="Submit" className="btn btn--submit" onClick={handleSubmit} />
    </form>
  )
}

//export const Contact = () => {
  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('gmail', 'template_1YsBvThp', e.target, 'USER_ID')
  //       .then((result) => {
  //         console.log(result.text);
  //       }, (error) => {
  //         console.log(error.text);
  //       });
  //   }

  //   return (
  //     <form className="contact-form" onSubmit={sendEmail}>
  //       <input type="hidden" name="contact_number" />
  //       <label>Name</label>
  //       <input type="text" name="user_name" />
  //       <label>Email</label>
  //       <input type="email" name="user_email" />
  //       <label>Message</label>
  //       <textarea name="message" />
  //       <input type="submit" value="Send" />
  //     </form>
  //   );
  // }

