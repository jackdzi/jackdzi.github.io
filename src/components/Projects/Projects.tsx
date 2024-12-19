import projectData from "./projects_data.tsx";

function Projects() {
  return (
    <div className="flex flex-col items-center pt-16 py-2.5">
      <div className="mb-2.5"></div>
      <h1 className="mb-2.5 font-serif text-black dark:text-white">Things I'm working on</h1>
      <div className="mt-4">
        <div className="card mb-2.5 flex flex-wrap">
          {projectData.map((project) => (
            <div key={project.id} className="mb-2.5 w-full sm:w-auto flex flex-col items-center px-4">
              <button className="transition-all duration-300"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <a
                  href={project.link}
                  className="text-beige"
                  target="_self"
                >
                  {project.title}
                </a>
              </button>
              <div className="w-72 p-10px pt-4 font-serif text-xl text-center text-black dark:text-white">
                <p style={{textAlign: "justify"}}>
                {project.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
