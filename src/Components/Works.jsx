import { useState } from 'react';
import { motion } from 'motion/react';
import physicsLibraryScreenshot from '../assets/imgs/physics-library.png';
import reportingTool from '../assets/imgs/reporting-tool.png';
import ProjectGrid from './ProjectGrid';

const MotionDiv = motion.div;

const developerProjects = [
  {
    id: 1,
    title: 'Sales Reporting Tool',
    img: reportingTool,
    description:
      'A tool for preparing sales reports, doing calculations, and providing a sales report ready for presentation.',
  },
  {
    id: 2,
    title: 'Library',
    img: physicsLibraryScreenshot,
    description:
      'A platform for providing study material to fellow students during our time at Chancellor College, Physics department.',
  },
];

const graphicsProjects = [
  {
    id: 1,
    title: 'Sales Reporting Tool',
    img: reportingTool,
    description: 'A dashboard for tracking sales figures and generating reports.',
  },
  {
    id: 2,
    title: 'Project Planner',
    img: reportingTool,
    description: 'Organize tasks, deadlines, and deliverables for your team.',
  },
];

function Works() {
  const [tab, setTab] = useState('dev');

  return (
    <section id="works" className="scroll-mt-28 bg-[#F7FFFC] px-4 py-24 sm:px-6 lg:px-8">
      <MotionDiv
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-black text-[#233860] sm:text-5xl">Works</h2>
        <div className="mt-6 inline-flex rounded-lg border border-[#233860]/10 bg-white p-1 shadow-sm">
          <button
            type="button"
            className={`cursor-pointer rounded-md px-4 py-2 font-bold transition ${
              tab === 'dev' ? 'bg-[#233860] text-white shadow-sm' : 'text-[#233860] hover:bg-[#E7FDF6]'
            }`}
            onClick={() => setTab('dev')}
          >
            Web & Software
          </button>
          <button
            type="button"
            className={`cursor-pointer rounded-md px-4 py-2 font-bold transition ${
              tab === 'graphics' ? 'bg-[#233860] text-white shadow-sm' : 'text-[#233860] hover:bg-[#E7FDF6]'
            }`}
            onClick={() => setTab('graphics')}
          >
            Graphics
          </button>
        </div>
        {tab === 'dev' && <ProjectGrid projects={developerProjects} />}
        {tab === 'graphics' && <ProjectGrid projects={graphicsProjects} variant="light" />}
      </MotionDiv>
    </section>
  );
}

export default Works;
