import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-4 pt-10 items-center w-[95%] mx-auto px-4">
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
        <h1 className="font-mono text-black dark:text-white pb-4">About Me</h1>
        <div className="">
          <div className="card-wrapper p-1">
            <div className="card-content font-mono text-black dark:text-white text-center sm:text-right">
              I'm a student at Rice with a keen interest in all things
              technology, looking to gain experience working on real life, impactful projects. In my free time, I enjoy reading and playing electric
              guitar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
