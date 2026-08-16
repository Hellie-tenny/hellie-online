import { motion } from 'motion/react';
import reportingTool from '../assets/imgs/reporting-tool.png';
import physicsLibraryScreenshot from '../assets/imgs/physics-library.png';
import etiquetteCvScreenshot from '../assets/imgs/etiquettecv-landing.png';
import postankScreenshot from '../assets/imgs/postank-screenshot.png';
import rocketWebAdvert from '../assets/imgs/rocket-web-advert.jpg';
import etiquetteAiPoster from '../assets/imgs/etiquette-ai-poster.jpg';
import rocketBusinessCard from '../assets/imgs/rocket-business-card.jpg';
import carForHireAd from '../assets/imgs/car-for-hire-ad.jpg';
import ProjectGrid from './ProjectGrid';

const MotionDiv = motion.div;

const webProjects = [
  {
    id: 1,
    title: 'Sales Reporting Tool',
    img: reportingTool,
    href: 'https://team-lion-reporting-tool.web.app/',
    description: 'A tool for preparing sales reports, doing calculations, and generating presentation-ready output.',
  },
  {
    id: 2,
    title: 'Physics Library',
    img: physicsLibraryScreenshot,
    href: 'https://cc-physics.web.app/',
    description: 'A study-material platform built for fellow students in the Chancellor College Physics department.',
  },
  {
    id: 3,
    title: 'Etiquette CV',
    img: etiquetteCvScreenshot,
    href: 'https://ettiquette-cv.web.app/',
    description: 'A CV generator app built with React, Firebase, and an AI-assisted cover letter feature.',
  },
  {
    id: 4,
    title: 'Postank',
    img: postankScreenshot,
    href: 'https://postankstudio.web.app/',
    description: 'A tool for creating product and social media post graphics, with customizable stickers, fonts, and gradients.',
  },
];

const graphicProjects = [
  {
    id: 1,
    title: 'Rocket Web — Advert',
    img: rocketWebAdvert,
    description: 'A promotional advert for Rocket Web, showcasing website services for businesses.',
  },
  {
    id: 2,
    title: 'AI Cover Letter Assistant — Poster',
    img: etiquetteAiPoster,
    description: 'A launch poster for Etiquette CV\u2019s AI-powered cover letter writing assistant.',
  },
  {
    id: 3,
    title: 'Rocket — Business Card Design',
    img: rocketBusinessCard,
    description: 'Business card design and mockup for Rocket, featuring brand identity and contact details.',
  },
  {
    id: 4,
    title: 'Car for Hire — Advert',
    img: carForHireAd,
    description: 'A promotional advert design for a car hire service.',
  },
];

function Works() {
  return (
    <section id="works" className="scroll-mt-20 bg-[#E7FDF6] px-4 py-20 sm:px-6 lg:px-8">
      <MotionDiv
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-10 text-3xl font-bold text-[#233860]">What I&apos;ve built</h2>

        <h3 className="mb-4 text-lg font-semibold text-[#233860]">Web</h3>
        <ProjectGrid projects={webProjects} />

        <h3 className="mb-4 mt-12 text-lg font-semibold text-[#233860]">Graphic Design</h3>
        <ProjectGrid projects={graphicProjects} expandable />
      </MotionDiv>
    </section>
  );
}

export default Works;
