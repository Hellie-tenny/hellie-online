import React from 'react'
import Nav from './Nav'

export default function Contact() {
  return (
    <div className='h-screen'>
        <Nav />

        <div className='sm:flex w-full h-[80%] p-4'>
            <div className='sm:h-full flex-1'>
              <h1 className='font-bold text-2xl'>Say Hi!</h1>
              <p>
                Feel free to contact me. I'm always happy for an adventure.
              </p>
            </div>
            <div className='h-full flex-1'>
              <form 
              className=" flex flex-col p-5"
              action="mailto:hellingsmakondetsa@gmail.com" method="POST" enctype="text/plain"
              >
                <input type="text" name="subject" placeholder="Your Name" className="border-b py-4" required />
                <input type="textarea" name="message" placeholder="Your Message" className="border-b py-4" required />
                <button className="bg-[#233860] p-4 text-white my-5 cursor-pointer" type="submit">Send</button>
              </form>
            </div>
        </div>
    </div>
  )
}
