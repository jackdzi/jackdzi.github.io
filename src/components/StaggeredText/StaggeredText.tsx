import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StaggeredText = ({ text, className, delay, last, small}: { text: string; className: string, delay: number, last: boolean, small: boolean }) => {
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStart(true);
    }, 5200 + delay);

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.11,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: 13 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        damping: 10,
        stiffness: 70,
      },
    },
  };

  return (
    <motion.div
      className={`staggered-text-container ${className}`}
      variants={container}
      initial="hidden"
      animate={animationStart ? "visible" : "hidden"}
    >
      {text.split(" ").map((word, index, arr) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            marginRight: small ? "5px" : "8px",
            color: (index === arr.length - 1) && last ? "#90EE90" : "inherit"
          }}
        >
          {word.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default StaggeredText;

// Usage example:
// <StaggeredText text="Welcome to my website!" className="custom-class" />
