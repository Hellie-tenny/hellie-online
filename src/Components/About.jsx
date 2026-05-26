import { motion } from 'motion/react';
import profilePic from '../assets/imgs/hellie.png'
const MotionDiv = motion.div;

function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-[#E7FDF6] px-2 py-24 sm:px-6 lg:px-8">
      <MotionDiv
        className="grid max-w-5xl items-center gap-10 rounded-lg  sm:p-10 md:grid-cols-[0.75fr_1.25fr]"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="">
        <img src={profilePic} alt="hellie" />
        </div>
        <div>
          <h2 className="pb-4 text-4xl font-black text-[#233860]">Hellings Makondetsa</h2>
          <p className="text-lg leading-8 text-[#233860]/90">
            Hellings Makondetsa is a Tech Enthusiast whose interests are in numerous tech concepts. Hellie strives to solve
            world&apos;s problems with tech. Hellie was first introduced to coding in 2018, and since then, he has been
            obsessed with tech.
            <br />
            <br />I am always willing to learn new things, and I enjoy a fun project.
          </p>
        </div>
      </MotionDiv>
    </section>
  );
}

export default About;
