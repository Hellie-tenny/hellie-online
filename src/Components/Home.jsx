import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import hellieImage from '../assets/imgs/hellie.png'
import pic1 from '../assets/imgs/img1.jpg';
import workflowScreenshot from '../assets/imgs/workflow.png';
import img1 from '../assets/imgs/img1.jpg';
import img2 from '../assets/imgs/img2.png';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

export default function Home() {
    return (
        <div className='min-h-screen bg-[#E7FDF6]'>

            <Nav />

            <motion.div
                className='p-4 h-screen content-around flex md:flex-row flex-col-reverse'
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true, amount: 0.3 }}
            >

                <div className='h-full flex justify-center flex-col flex-1'>
                    <h2 className='text-[2em] font-bold'>
                        Hello, <br />
                        My name is <span className='text-[#F25C0C]'>Hellings</span>. <br />
                        Welcome to my world <br />
                    </h2>
                    <button className='bg-[#233860] text-[#E7FDF6] p-2 rounded-lg w-fit hover:bg-[#F25C0C] cursor-pointer'>Contact Me</button>
                </div>

                <div className='h-full w-full flex-1'>
                    <img src={hellieImage} className='w-full flex-1' />
                </div>

            </motion.div>

            <motion.div
                className='p-4 h-screen'
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className='font-bold text-[2em]'>Who is Hellie?</h2>

                <div className='flex py-10 flex-col sm:flex-row'>
                    <div className='flex-1'>
                        <img src={pic1} alt="setup" className='w-[90%] rounded-md' />
                    </div>
                    <div className='flex-1 p-4'>
                        <p className='text-2xl'>
                            Hellings Makondetsa is a <span className='text-[#F25C0C] font-bold'>Tech Enthusiast</span> who is very passionate in making the world a better place by solving the world's problem with Tech.
                        </p>
                    </div>

                </div>

            </motion.div>

            <motion.div
                className='p-4 w-full justify-center flex flex-col'
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true, amount: 0.3 }}
            >

                <h2 className='font-bold text-[2em]'>Recent Projects</h2>

                <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 justify-between items-center w-full my-5'>

                    <div className='h-full rounded-md mx-2 overflow-hidden relative'>
                        <img src={workflowScreenshot} className='h-full w-full object-cover' />
                        <div className='absolute bottom-0 p-5 bg-linear-to-b from-transparent to-black w-full h-[50%] flex flex-col justify-end'>
                            <h2 className='text-[#E7FDF6] font-bold text-4xl'>Web Development</h2>
                        </div>

                    </div>
                    <div className='h-full rounded-md mx-2 overflow-hidden relative'>
                        <img src={img2} className='h-full w-full object-cover' />
                        <div className='absolute bottom-0 p-5 bg-linear-to-b from-transparent to-black w-full h-[50%] flex flex-col justify-end'>
                            <h2 className='text-[#E7FDF6] font-bold text-4xl'>Graphic Design</h2>
                        </div>

                    </div>
                    <div className='h-full rounded-md mx-2 overflow-hidden relative'>
                        <img src={img1} className='h-full w-full object-cover' />
                        <div className='absolute bottom-0 p-5 bg-linear-to-b from-transparent to-black w-full h-[50%] flex flex-col justify-end'>
                            <h2 className='text-[#E7FDF6] font-bold text-4xl'>UI/UX Design</h2>
                        </div>

                    </div>
                    <div className='h-full rounded-md mx-2 overflow-hidden relative'>
                        <img src={workflowScreenshot} className='h-full w-full object-cover' />
                        <div className='absolute bottom-0 p-5 bg-linear-to-b from-transparent to-black w-full h-[50%] flex flex-col justify-end'>
                            <h2 className='text-[#E7FDF6] font-bold text-4xl'>Web Development</h2>
                        </div>

                    </div>

                </div>

                <a href="" className='text-right text-[#233860] font-bold hover:text-[#F25C0C]'>Visit my full developer profile</a>

            </motion.div>

            <motion.div
                className='p-4 h-screen bg-[#233860] flex items-center content-center'
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <p className='text-[#E7FDF6] font-bold text-5xl align-text-center'>
                    Wanna work with me? Don't hasitate to hit me up. Am always ready for a project
                </p>
            </motion.div>
            <Footer />
        </div>
    )
}
