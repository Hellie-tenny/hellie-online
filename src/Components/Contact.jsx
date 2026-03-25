import React, { useState } from 'react'
import Nav from './Nav'
import emailjs from '@emailjs/browser'
import contactpng from '../assets/imgs/contact.png'

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    // Emailjs particulars
    const serviceId = 'service_cjxelre';
    const templateId = 'template_lftgm7b';
    const publicKey = 'Eyl2GAaRPWlxznFdY';

    // dynamic template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Hellings',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((respose) => {
      alert("Message sent successifully!");
      setName("");
      setMessage("");
      setEmail("");
    })

  }

  return (
    <div className='h-screen'>
      <Nav />

      <div className='sm:flex w-full h-[80%] p-4'>
        <div className='sm:h-full flex-1'>
          <img src={contactpng} alt="contact us" />
          <h1 className='font-bold text-2xl'>Say Hi!</h1>
          <p>
            Feel free to contact me. I'm always happy for an adventure.
          </p>
        </div>
        <div className='h-full flex-1'>

          <form
            className=" flex flex-col p-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text" name="name"
              placeholder="Your Name"
              className="border-b py-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text" name="email"
              placeholder="Your Email"
              className="border-b py-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="textarea"
              name="message"
              placeholder="Your Message"
              className="border-b py-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button className="bg-[#233860] p-4 text-white my-5 cursor-pointer" type="submit">Send</button>
          </form>

        </div>
      </div>
    </div>
  )
}
