import { motion } from 'motion/react';
import etiquettecv from '../assets/imgs/etiquettecv.png';
import hellieImage from '../assets/imgs/hellie.png';
import pic1 from '../assets/imgs/img1.jpg';
import reportingTool from '../assets/imgs/reporting-tool.png';
import workflowScreenshot from '../assets/imgs/workflow.png';

const MotionDiv = motion.div;

const recentProjects = [
  { title: 'WorkFlow', type: 'Web App', img: workflowScreenshot },
  { title: 'Etiquette CV', type: 'Web App', img: etiquettecv },
  { title: 'Reporting Tool', type: 'Web App', img: reportingTool },
  { title: 'Web Development', type: '', img: workflowScreenshot },
];

function Home() {
  return (
    <section id="home" className="scroll-mt-28">
      <MotionDiv
        className="mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_0.9fr] lg:px-8"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold">
            Hello, <br />
            My name is <span className="text-[#F25C0C]">Hellings</span>. <br />
            Welcome to my world <br />
          </h1>
          <a
            className="mt-8 w-fit cursor-pointer rounded-lg bg-[#233860] px-6 py-3 font-bold text-[#E7FDF6] shadow-lg shadow-[#233860]/20 transition hover:-translate-y-0.5 hover:bg-[#F25C0C] hover:shadow-[#F25C0C]/25"
            href="#contact"
          >
            Contact Me
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="" />
          
        </div>
      </MotionDiv>

      
    </section>
  );
}

export default Home;
