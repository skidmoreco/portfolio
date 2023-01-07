import '../components/Styling/FormStyles.css'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react';

const ContactMe = (e) => {
  const form = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8ygj1oi', 'template_41z49oi', form.current, 'Im3PAf8K-04_ZIJSl')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
  }
  return (
    <div className='form'>
        <form ref={form} onSubmit={handleFormSubmit}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Subject</label>
            <input type="text" name="subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here!'/>
            <button className='btn' value="send">Submit</button>
        </form>
    </div>
  )
}


export default ContactMe
