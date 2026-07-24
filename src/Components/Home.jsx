import { motion } from 'motion/react';
import hellieImage from '../assets/imgs/hellie.png';

const MotionDiv = motion.div;

function Home() {
  return (
    <section id="home" className="scroll-mt-20 bg-[#E7FDF6] px-4 sm:px-6 lg:px-8">
      <MotionDiv
        className="mx-auto grid max-w-5xl items-center gap-10 py-20 md:grid-cols-[1fr_0.8fr] md:py-28"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#F25C0C]">
            Frontend Developer &amp; Designer
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#233860] sm:text-5xl">
            Hi, I&apos;m Hellings.
          </h1>
          <p className="mt-4 max-w-md text-[#233860]/70">
            I build and design web products from Lilongwe, Malawi.
          </p>
          <a
            className="mt-8 inline-block rounded bg-[#233860] px-6 py-3 font-medium text-[#E7FDF6] transition hover:bg-[#F25C0C]"
            href="#contact"
          >
            Contact Me
          </a>
        </div>

        <img
          src={hellieImage}
          alt="Hellings Makondetsa"
          className="mx-auto w-full max-w-xs rounded-lg object-cover"
        />
      </MotionDiv>
    </section>
  );
}

export default Home;
