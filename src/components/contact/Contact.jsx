import React from 'react'
import './contact.css'
import {BsInstagram} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0k70pce', 'template_zl2lfno', form.current, 'xmZVNC3u29pNxN1aH')
      
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <BsInstagram className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>Follow me on insta</h5>
            <a href = "https://www.instagram.com/prajwal.alewoor/" target="_blank">My Profile</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>Feel free to message</h5>
            <a href = "https://api.whatsapp.com/send?phone=9632693443" target="_blank">Leave a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>prajwal.alewoor</h5>
            <a href = "https://m.me/prajwal.alewoor" target="_blank">Message me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
