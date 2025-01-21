import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import projectData from "./projects_data";
import {
  Project,
  DirectionType,
  AnimationType,
  fadeIn,
} from "../../types/AnmationTypes";

interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  title,
  text,
  link,
  img,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  // TODO: {!(screen width < 50%) && <horizontal div></horizontal>} put this between elements to make it wrap quicker. Seconly, add a technologies used part
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn(
        "up" as DirectionType,
        "spring" as AnimationType,
        index * 0.1 + 0.4,
        0.75,
      )}
      className={`w-full mt-16 flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-5 items-center justify-center`}
    >
      <div className="w-full md:w-3/5 h-[50%] card-wrapper rounded-3xl p-1 flex items-center justify-center">
        {img !== "" && (
          <img
            src={img}
            alt="Project Image"
            className="rounded-3xl select-none card-content p-0"
            draggable="false"
          />
        )}
        <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-2xl aspect-[3/2]"></div>
      </div>
      <div
        className={`w-full md:w-3/5 px-6 flex flex-col justify-center ${
          !isEven && windowWidth > 765 ? "text-right" : "text-left"
        }`}
      >
          <button
            onClick={() => window.open(link, "_self")}
            className="button-56 text-white"
          >
            <p className="text-white">{title}</p>
          </button>
        <p
          className="mt-4 w-[100%] font-mono text-black dark:text-white text-sm sm:text-base md:text-lg lg:text-xl xl:w-11/12"
          style={{ fontWeight: 300 }}
        >
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
    <div className="w-full px-2 md:px-10 lg:px-40 pt-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn(
          "right" as DirectionType,
          "spring" as AnimationType,
          0.4,
          1.35,
        )}
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
            img={project.image}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
