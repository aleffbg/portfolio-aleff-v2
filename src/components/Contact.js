import React from 'react';
// usestate
import { useState } from 'react';
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
// emailjs
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_kjt2md4", "template_klc7l1d", templateParams, "Ah1DWKsTai9w036_q")
    .then((response) => {
      console.log("Email enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("Erro: ", err)
    })

  }

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-x1 uppercase font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            variants={fadeIn('left', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start' 
            onSubmit={sendEmail}>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='text' 
              placeholder='Your name'
              onChange={(e) => setName(e.target.value)}
              value={name}/>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='text' 
              placeholder='Your email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}/>
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
              placeholder='Your message'
              onChange={(e) => setMessage(e.target.value)}
              value={message}></textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
