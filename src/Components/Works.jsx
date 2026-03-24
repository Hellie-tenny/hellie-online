import Nav from './Nav';
import { motion } from 'framer-motion';
import Dev from './works-tabs/Dev';
import { useState } from 'react';
import Graphics from './works-tabs/Graphics';

const Works = () => {


    const [tab, setTab] = useState("dev");

    return (
        <div className='min-h-screen bg-[#E7FDF6]'>
            <Nav />

            <motion.div
                className='p-4 h-screen'
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                <h2 className='font-bold text-[2em]'>Works</h2>
                <div>
                    <span
                        className={`cursor-pointer inline-block mx-2 font-bold py-2 ${tab === "dev" ? "border-b-2 border-b-[#F25C0C]" : ""} `} 
                        onClick={() => setTab("dev")} 
                    >Web & Software</span>
                    <span className={`cursor-pointer inline-block mx-2 font-bold py-2 ${tab === "graphics" ? "border-b-2 border-b-[#F25C0C]" : ""} `} onClick={() => setTab("graphics")} >Graphics</span>
                </div>
                <div>
                    {tab === "dev" ? <Dev /> : ""}
                    {tab === "graphics" ? <Graphics /> : ""}
                </div>
            </motion.div>

        </div>
    );
}

export default Works;