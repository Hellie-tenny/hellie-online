import { motion } from 'motion/react';

const MotionSection = motion.section;

function CallToAction() {
  return (
    <MotionSection
      className="m-4 flex min-h-[60vh] flex-col justify-center bg-[#233860] p-10"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-5xl font-bold text-[#E7FDF6]">Wanna work with me?</h2>
      <p className="mb-5 text-[#E7FDF6]">I am always ready for a project. Hit me up, let&apos;s talk.</p>
      <a
        className="w-fit cursor-pointer rounded-lg bg-[#F25C0C] p-2 text-[#E7FDF6] hover:border-2 hover:bg-[#233860]"
        href="#contact"
      >
        Contact Me
      </a>
    </MotionSection>
  );
}

export default CallToAction;
