import React from "react"

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
        <h2>Contact Us</h2>
      <p>
        <label>
          Your Name: <input placeholder="Name" type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input placeholder="Email" type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea placeholder="Your Message" name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default ContactForm