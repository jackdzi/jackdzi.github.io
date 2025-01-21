import { useState, useRef, useEffect } from "react";
import images from "./imageData.tsx";

const ImageTrack = () => {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleOnDown = (e: any) => {
    if (trackRef.current) {
      handleArrowRemoval();
      trackRef.current.dataset.mouseDownAt = e.clientX;
    }
  };

  const handleOnUp = () => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = "0";
      trackRef.current.dataset.prevPercentage =
        trackRef.current.dataset.percentage || "0";
    }
  };

  const handleOnMove = (e: any) => {
    if (trackRef.current) {
      if (trackRef.current.dataset.mouseDownAt === "0") return;

      if (e.type === "touchmove") {
        e.preventDefault();
      }
      const clientX =
        e.type === "touchmove" || e.type === "touchstart"
          ? e.touches[0].clientX
          : e.clientX;
      const mouseDelta =
        parseFloat(trackRef.current.dataset.mouseDownAt || "0") - clientX;
      console.log(mouseDelta);
      const maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * 100;
      const nextPercentage = Math.max(
        0,
        Math.min(
          100,
          parseFloat(trackRef.current.dataset.prevPercentage || "0") +
            percentage,
        ),
      );

      trackRef.current.dataset.percentage = nextPercentage.toString();
      trackRef.current.animate(
        { transform: `translate(-${nextPercentage + 9}%, 0%)` },
        { duration: 1200, fill: "forwards" },
      );
      for (const image of trackRef.current.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${nextPercentage}% 50%` },
          { duration: 1200, fill: "forwards" },
        );
      }
    }
  };
  const handleArrowRemoval = () => {

    setTimeout(() => {
      setIsArrowVisible(false);
    }, 300);
  };

  const handleArrowClick = () => {
    handleArrowRemoval();
    if (trackRef.current) {
      const prevPercentage = parseFloat(
        trackRef.current.dataset.prevPercentage || "0",
      );
      const mouseDelta = 250;
      const maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * 100;
      const nextPercentage = Math.max(
        0,
        Math.min(100, prevPercentage + percentage),
      );

      trackRef.current.dataset.percentage = nextPercentage.toString();
      trackRef.current.dataset.prevPercentage = nextPercentage.toString();
      trackRef.current.animate(
        { transform: `translate(-${nextPercentage}%, 0%)` },
        { duration: 900, fill: "forwards", easing: "ease-in-out" },
      );
      for (const image of trackRef.current.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${nextPercentage}% 50%` },
          { duration: 900, fill: "forwards", easing: "ease-in-out" },
        );
      }
    }
  };

  useEffect(() => {
    // Add global event listeners
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("touchmove", handleOnMove, { passive: false });

    return () => {
      // Clean up event listeners
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("touchmove", handleOnMove);
    };
  }, []);

  return (
      <div className="justify-center items-center flex flex-col pb-4 mt-[300px] mb-[150px]">
      <h2 className="text-3xl w-[95%] mb-2.5 font-mono text-black dark:text-white font-bold text-center">
        Click and drag to see some of my designs!
      </h2>
        <div className="flex justify-center items-center transform translate-x-[50%] max-w-full p-4 relative">
          <div
            className={`arrow ${isArrowVisible ? "" : "fadeOut"}`}
            style={{ transform: "translateX(-49vw) rotate(45deg)" }}
            onClick={handleArrowClick}
          ></div>
          <div
            id="image-track"
            ref={trackRef}
            data-mouse-down-at="0"
            data-prev-percentage="0"
            className="image-track flex justify-center items-center"
            onMouseDown={handleOnDown}
            onTouchStart={(e) => {
              handleOnDown(e.touches[0]);
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className={"image rounded-[30px]"}
                src={image.src}
                alt={image.alt}
                draggable="false"
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default ImageTrack;
