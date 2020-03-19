import React, { useState } from 'react'

import '../style/contact.css'

const Contact = React.forwardRef((props, ref) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <footer>
      <h1>Contact</h1>
      <p>Interested in collaborating?</p>
      <p>Send me an email!</p>
      <form
        action="https://formspree.io/mwkqnknp"
        method="POST"
      >
        <input
          type="text"
          name="_replyto"
          value={email}
          placeholder='Your Email'
          onChange={(elem) => setEmail(elem.target.value)}
        />
        <textarea
          name="message"
          value={message}
          placeholder='Your Message'
          onChange={(elem) => setMessage(elem.target.value)}
          rows='12'
        />
      <button type="submit">Send</button>
      </form>
    </footer>
  )
})

export default Contact
