import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h9gbmgd', 'template_t8ptwvi', form.current, 'uA9EeWOooFH_p--yq');
  
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2>Kontakt</h2>
      <h5>in Verbindung setzen</h5>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Sebastian.Britner@gmx.de</h5>
            <a href='mailto:Sebastian.Britner@gmx.de' target='_blank'>Nachricht senden</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Vollständiger Name' required/>
          <input type='email' name='email' placeholder='Email' required/>
          <textarea name='message' rows='7' placeholder='Nachricht' required/>
          <button type='submit' className='btn btn-primary'>Nachricht senden</button>
        </form>
      </div>
    </section>
  )
}

export default Contact