import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import projectData from "./projects_data";
import { Project, DirectionType, AnimationType, fadeIn } from "../../types/AnmationTypes";

interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  title,
  text,
  link
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up" as DirectionType, "spring" as AnimationType, index * 0.1 + 0.4, 0.75)}
      className={`w-full mt-16 flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-5`}
    >
      <div className="w-full md:w-3/5 bg-slate-200 dark:bg-slate-800 rounded-3xl p-8">
        {/* Placeholder for future image */}
        <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-2xl aspect-[3/2]"></div>
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${
        isEven ? "text-justify" : "text-justify"
      }`}>
        <button
          onClick={() => window.open(link, '_self')}
          className="button-56 text-white"
        >
          <p className="text-white">{title}</p>
        </button>
        <p className="mt-4 font-mono text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-bold">
          {text}
        </p>
      </div>
    </motion.div>
  );
};


const Projects: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <div className="w-full px-4 md:px-20 lg:px-40 pt-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
      variants={fadeIn("down" as DirectionType, "spring" as AnimationType, 0.4, 1.35)}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-black dark:text-white mb-12">
          Things I'm working on
        </h1>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-32">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
