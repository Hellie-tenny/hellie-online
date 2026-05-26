import { useState } from 'react';

function ProjectGrid({ projects, variant = 'dark' }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative grid grid-cols-1 gap-2 py-4 sm:grid-cols-4">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          className={`m-2 h-fit cursor-pointer rounded-md p-4 text-left shadow-md ${
            variant === 'dark' ? 'bg-[#233860]' : 'bg-white'
          }`}
          onClick={() => setSelectedProject(project)}
        >
          <img src={project.img} alt={project.title} className="h-40 w-full rounded object-cover" />
          <h3 className={`my-2 font-bold ${variant === 'dark' ? 'text-[#E7FDF6]' : 'text-[#233860]'}`}>
            {project.title}
          </h3>
        </button>
      ))}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000005d] p-4">
          <div className="relative flex min-h-[60%] w-full max-w-2xl flex-col items-center justify-center rounded-xl bg-[#E7FDF6] p-6">
            <button
              type="button"
              className="absolute right-4 top-4 cursor-pointer text-2xl font-bold text-[#233860]"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              x
            </button>
            <img src={selectedProject.img} alt={selectedProject.title} className="mb-4 max-h-64 max-w-full rounded" />
            <div className="p-4 text-center text-[#233860]">
              <h3 className="mb-2 text-xl font-bold">{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGrid;
