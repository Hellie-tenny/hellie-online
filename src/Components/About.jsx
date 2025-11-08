import React from 'react'
import profilePic from '../assets/imgs/hellie-id.jpg'
import Nav from './Nav'
import Footer from './Footer'

// light: "#E7FDF6",
// accent: "#F25C0C",
// dark: "#233860"

export default function About() {
  return (
    <div className='bg-[#E7FDF6] h-screen'>
      <Nav />
      <div>
        {/* <h2 className='text-[2em] py-4 font-bold'>About Me</h2> */}
        <div className='w-[50%] mx-auto p-4'>

          <img src={profilePic} alt="profile_pic" className='rounded-full h-32 w-32 mx-auto' />
          <h2 className='text-[2em] py-4 text-center'>Hellings Makondetsa</h2>
          <p>
            Hellings Makondetsa is a Tech Enthusiast whose interests are in numerous tech concepts.Hellie strives to solve world's problems with tech. Hellie was first introduced to coding in 2018, and since then, he has been obsessed with tech.
            <br />
            <br />
            I am always willing to learn new things, and i enjoy a fun project.
          </p>
        </div>
      </div>
    <Footer />
    </div>
  )
}
