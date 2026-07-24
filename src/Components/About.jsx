import { motion } from 'motion/react';

const MotionDiv = motion.div;

const skills = ['Web Development', 'UI/UX Design', 'Graphic Design'];

function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <MotionDiv
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#F25C0C]">About</p>
        <h2 className="mb-4 text-3xl font-bold text-[#233860]">Hellings Makondetsa</h2>
        <p className="leading-7 text-[#233860]/80">
          Hellings Makondetsa is a Tech Enthusiast whose interests are in numerous tech concepts. Hellie strives to solve
          world&apos;s problems with tech. Hellie was first introduced to coding in 2018, and since then, he has been
          obsessed with tech.
          <br />
          <br />I am always willing to learn new things, and I enjoy a fun project.
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-[#233860]">
          {skills.map((skill, index) => (
            <li key={skill} className="flex items-center gap-4">
              {skill}
              {index < skills.length - 1 && <span className="text-[#233860]/20">|</span>}
            </li>
          ))}
        </ul>
      </MotionDiv>
    </section>
  );
}

export default About;
