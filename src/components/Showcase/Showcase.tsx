import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImageSlideshow from "../ImageSlideshow/ImageSlideshow";
import { fadeIn, DirectionType, AnimationType } from "../../types/AnmationTypes.tsx";

function Showcase() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn("left" as DirectionType, "spring" as AnimationType, 0.4, 1.95)}
    >
      <ImageSlideshow />
    </motion.div>
  );
}

export default Showcase;
