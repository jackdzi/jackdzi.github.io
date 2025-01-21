export interface Project {
  id: string | number;
  title: string;
  text: string;
  link: string;
  img: string;
  // Add when implementing images
  // image?: string;
}

export type DirectionType = "left" | "right" | "up" | "down";
export type AnimationType = "spring" | "tween";

export const fadeIn = (
  direction: DirectionType,
  type: AnimationType,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
