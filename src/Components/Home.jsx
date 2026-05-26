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

      <MotionDiv
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="overflow-hidden rounded-lg border border-[#233860]/10 bg-white p-2 shadow-xl shadow-[#233860]/10">
          <img src={pic1} alt="setup" className="aspect-[4/3] w-full rounded-md object-cover" />
        </div>
        <div className="rounded-lg border border-[#233860]/10 bg-[#E7FDF6] p-6 shadow-sm sm:p-8">
          <p className="text-2xl leading-relaxed text-[#233860]">
            Hellings Makondetsa is a <span className="font-bold text-[#F25C0C]">Tech Enthusiast</span> who is very
            passionate about making the world a better place by solving problems with Tech.
          </p>
        </div>
      </MotionDiv>

      <MotionDiv
        className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-black text-[#233860] sm:text-5xl">Recent Projects</h2>
        <div className="my-8 grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recentProjects.map((project) => (
            <div
              key={project.title}
              className="group relative min-h-72 overflow-hidden rounded-lg border border-[#233860]/10 bg-white shadow-lg shadow-[#233860]/10"
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#233860]/20 to-[#233860]" />
              <div className="absolute bottom-0 flex w-full flex-col justify-end p-5">
                {project.title && <h3 className="font-bold text-[#F25C0C]">{project.title}</h3>}
                {project.type ? (
                  <h4 className="text-3xl font-black text-[#E7FDF6]">{project.type}</h4>
                ) : (
                  <h4 className="text-3xl font-black text-[#E7FDF6]">{project.title}</h4>
                )}
              </div>
            </div>
          ))}
        </div>
        <a href="#works" className="self-end font-bold text-[#233860] underline decoration-[#F25C0C]/40 underline-offset-4 hover:text-[#F25C0C]">
          Visit my full developer profile
        </a>
      </MotionDiv>
    </section>
  );
}

export default Home;
