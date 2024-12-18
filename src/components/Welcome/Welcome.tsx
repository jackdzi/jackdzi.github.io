import React, { useState, useEffect } from "react";
import Computer from "../../../public/computer.svg";

const Welcome: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const eyeStyle = (eyeX: number, eyeY: number) => ({
    position: "absolute" as const,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "white",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: `${eyeX}px`,
    top: `${eyeY}px`,
  });

  const pupilStyle = (eyeCenterX: number, eyeCenterY: number) => {
    const dx = mousePosition.x - eyeCenterX;
    const dy = mousePosition.y - eyeCenterY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(10, Math.hypot(dx, dy) / 10);

    return {
      width: "15px",
      height: "15px",
      backgroundColor: "black",
      borderRadius: "50%",
      position: "absolute" as const,
      transition: `transform ${Math.random() * 0.5 + 0.1}s ease-in-out`,
      transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,

    };
  };

  return (
    <>
      <div className="flex justify-start absolute top-6 left-0 z-50" style={{ width: '185px', height: '200px' }}>
        <img
          src={Computer}
          alt="Computer"
          className="brightness-50 fill-red"
        />
      </div>
      <div className="flex justify-center items-center absolute top-0 left-0 w-[10vw] h-[10vh]">
        <div style={eyeStyle(25, 25)}>
          <div style={pupilStyle(50, 50)} />
        </div>
        <div style={eyeStyle(110, 25)}>
          <div style={pupilStyle(150, 50)} />
        </div>
      </div>
    </>
  );
};

export default Welcome;
