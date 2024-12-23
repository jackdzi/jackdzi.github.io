import projectData from "./projects_data.tsx";

function Projects() {
  return (
    <div className="flex flex-col items-center pt-16 py-2.5">
      <div className="mb-2.5"></div>
      <h1 className="mb-2.5 font-mono text-black dark:text-white w-4/5">Things I'm working on</h1>
      <div className="mt-4">
        <div className="mb-2.5 flex flex-wrap">
          {projectData.map((project) => (
            <div key={project.id} className="mb-2.5 w-full sm:w-auto flex flex-col items-center px-4">
              <button className="button-56"
              >
                <a
                  href={project.link}
                  className="text-white"
                  target="_self"
                >
                  {project.title}
                </a>
              </button>
              <div className="w-72 p-10px pt-4 font-mono text-center text-black dark:text-white">
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
