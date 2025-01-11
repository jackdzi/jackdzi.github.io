import StaggeredText from "../StaggeredText/StaggeredText";
import Dots from "../Dots/Dots";
import { CSSProperties } from 'react';

const Hero = () => {
  const handleArrowClick = () => {
    const startPosition = window.scrollY;
    const targetPosition = window.innerHeight;

    if (startPosition === targetPosition) return;

    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easing = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * easing);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
<div className="relative w-full h-screen overflow-hidden flex justify-center items-center bg-[#1D1D4D]">
  <Dots />
  <div className="flex flex-col justify-center items-center gap-5 p-12 pt-15 relative z-10">
    <div className="flex justify-between items-center gap-5 w-full">
      <div style={styles.textContainer as CSSProperties}>
        <div className="flex justify-left w-full h-full pb-4">
          <StaggeredText
            text="I'm Jack"
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-center text-white leading-tight m-0"
            last={true}
            delay={0}
            stagger={0.11}
            small={false}
            direction="left"
          />
        </div>
        <StaggeredText
          text="Sophomore @ Rice University,"
          className="text-white text-left font-serif text-xl md:text-2xl lg:text-3xl"
          delay={1000}
          last={false}
          stagger={0.025}
          small={true}
          direction="right"
        />
            <div className="my-4"></div>
        <StaggeredText
          text="Mathematics and Computer Science"
          className="text-white text-left font-serif text-xl md:text-2xl lg:text-3xl"
          delay={1700}
          last={false}
          stagger={0.025}
          small={true}
          direction="left"
        />
      </div>
      <div className="w-2/5">
        <img
          src="/Jack_Dzialo.jpg"
          alt="Hero Banner"
          className="rounded-full"
          style={{ width: '90%', height: 'auto' }}
        />
      </div>
    </div>
    <div
      className="arrow mt-5 always-white"
      style={{
        borderBlockColor: 'white',
        transform: `rotate(135deg) translateY(-${220}px) translateX(${220}px)`,
        position: 'absolute'
      }}
      onClick={handleArrowClick}
    ></div>
  </div>
</div>
  );
};

const styles = {
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "50px",
    paddingTop: "60px",
    position: "relative",
    zIndex: 1,
  },
  textContainer: {
    maxWidth: "50%",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "0 0 20px 0",
  },
  subtitle: {
    fontSize: "18px",
    margin: "0 0 30px 0",
  },
  buttonContainer: {
    display: "flex",
    gap: "15px",
  },
  primaryButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#007bff",
    backgroundColor: "#fff",
    border: "2px solid #007bff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  imageContainer: {
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default Hero;
