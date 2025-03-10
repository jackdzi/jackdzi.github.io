import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import { docker } from "react-icons"
import { fadeIn } from "../../types/AnmationTypes"; // Assuming fadeIn is defined in Types

const About: React.FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
  const [isWideScreenText, setIsWideScreenText] = useState(
    window.innerWidth > 800,
  );
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
      setIsWideScreenText(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <div className="flex items-center justify-center mt-16 h-[80vh] mb-[20px]">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn("up", "spring", 0, 0.75)}
        className="flex flex-wrap gap-4 pt-10 items-center w-[95%] mx-auto px-4"
      >
        {isWideScreen && (
          <div className="flex-1 p-4 flex flex-col justify-center items-center">
            <img
              className="rounded-lg"
              src="/amp.jpg"
              alt="About Me"
              draggable="false"
            />
            <p className="dark:text-white text-black font-mono font-bold pt-2">
              An amp I built
            </p>
          </div>
        )}
        <div className="flex-1 justify-center items-center">
          <h1 className="font-bold font-mono text-black dark:text-white pb-4">
            About Me
          </h1>
          <div className="">
            <div className="card-wrapper p-1">
              {!isWideScreenText && (
                <div className="card-content p-4 font-mono text-black dark:text-white text-center ">
                  I'm a student at Rice with a keen interest in fullstack
                  development looking to gain experience working on real life,
                  impactful projects. In my free time, I enjoy reading and
                  playing electric guitar.
                </div>
              )}
              {isWideScreenText && (
                <div className="card-content p-4 font-mono text-black dark:text-white text-center ">
                  I'm a student at Rice University with a keen interest in fullstack
                  development looking to gain experience working on real life,
                  impactful projects. I have experience working with C++, GoLang, Python, Typescript/Javascript, R, and SQL. I love anything technology, and I enjoy learning and using different types of software, such as Latex, Neovim, Linux, and React. In my free time, I like to read, solve puzzles, and
                  play electric guitar. Currently I'm reading To The Lighthouse by Virginia Woolf, and I'm trying to learn how to play Angeles by Elliot Smith.
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
