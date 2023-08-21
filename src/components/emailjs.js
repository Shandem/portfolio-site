import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Project.scss'
import 'dotenv/config'

export const Emailjs = () => {
    require('dotenv').config()

    const REACT_APP_YOUR_SERVICE_ID='service_dydjnmc'
    const REACT_APP_YOUR_TEMPLATE_ID='template_jvnbsz8'
    const REACT_APP_YOUR_PUBLIC_KEY='gi72uXlCWGpOh3E5P'
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log( form.current)
    emailjs.sendForm(REACT_APP_YOUR_SERVICE_ID, REACT_APP_YOUR_TEMPLATE_ID, form.current, REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text).showAlert();
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <div className='project mFlex'>  
        <div className='detailContainer'>
        <p>Send me some Mail</p>
            <form ref={form} onSubmit={(e) => sendEmail  (e.target.value='')  }>
                <label>Name</label>
                <input type="text" name="user_name"  />
                <label>Email</label>
                <input type="email" name="user_email"  />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
  );
};

 export default Emailjs;