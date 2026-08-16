import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const MotionCardTag = {
  a: motion.a,
  button: motion.button,
  div: motion.div,
};

function ProjectGrid({ projects, expandable = false }) {
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    if (!expandedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setExpandedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedProject]);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project, index) => {
        const isExpandTrigger = expandable && project.img;
        const cardType = isExpandTrigger ? 'button' : project.href ? 'a' : 'div';
        const CardTag = MotionCardTag[cardType];

        return (
          <CardTag
            key={project.id}
            type={cardType === 'button' ? 'button' : undefined}
            href={cardType === 'a' ? project.href : undefined}
            target={cardType === 'a' ? '_blank' : undefined}
            rel={cardType === 'a' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`flex h-full flex-col overflow-hidden rounded-lg border border-[#233860]/10 bg-white text-left ${
              isExpandTrigger || project.href ? 'cursor-pointer transition hover:border-[#F25C0C]/40' : ''
            }`}
            onClick={isExpandTrigger ? () => setExpandedProject(project) : undefined}
          >
            {project.img ? (
              <img src={project.img} alt={project.title} className="h-32 w-full object-cover" />
            ) : (
              <div className="flex h-32 w-full items-center justify-center bg-[#233860]/5 text-sm text-[#233860]/40">
                No image yet
              </div>
            )}
            <div className="flex flex-1 flex-col p-3">
              <h4 className="font-semibold text-[#233860]">{project.title}</h4>
              <p className="mt-1 text-sm text-[#233860]/60">{project.description}</p>
              {project.href && (
                <span className="mt-auto inline-block pt-2 text-sm font-semibold text-[#F25C0C]">
                  Visit project &rarr;
                </span>
              )}
            </div>
          </CardTag>
        );
      })}

      {expandedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#233860]/80 p-4"
          onClick={() => setExpandedProject(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold text-[#233860]"
            onClick={() => setExpandedProject(null)}
            aria-label="Close full image"
          >
            &times;
          </button>
          <img
            src={expandedProject.img}
            alt={expandedProject.title}
            className="max-h-full max-w-full rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectGrid;
