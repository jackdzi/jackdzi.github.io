import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StaggeredText = ({
  text,
  className,
  delay,
  last,
  small,
  stagger,
  direction = "left" // "left" or "right"
}: {
  text: string;
  className: string;
  delay: number;
  last: boolean;
  small: boolean;
  stagger: number;
  direction?: "left" | "right";
}) => {
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStart(true);
    }, 5200 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const container = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 90,
        staggerChildren: stagger,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`${className}`}
      variants={container}
      initial="hidden"
      animate={animationStart ? "visible" : "hidden"}
    >
      {text.split(" ").map((word, index, arr) => (
        <motion.span
          key={index}
          variants={letter}
          style={{
            display: "inline-block",
            marginRight: small ? "5px" : "8px",
            color: (index === arr.length - 1) && last ? "#90EE90" : "inherit"
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
