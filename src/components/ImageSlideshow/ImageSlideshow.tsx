import { useRef, useEffect } from "react";

const ImageTrack = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Event Handlers
  const handleOnDown = (e: any) => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = e.clientX;
    }
  };

  const handleOnUp = () => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = "0";
      trackRef.current.dataset.prevPercentage =
        trackRef.current.dataset.percentage;
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
        { transform: `translate(-${nextPercentage}%, 0%)` },
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
    <div className="flex justify-center items-center transform translate-x-1/2 max-width-100vw">
      <div
        id="image-track"
        ref={trackRef}
        data-mouse-down-at={0}
        data-prev-percentage={0}
        className="image-track flex justify-center items-center"
        onMouseDown={handleOnDown}
        onTouchStart={(e) => {
          handleOnDown(e.touches[0]);
        }}
      >
        {/* Replace the images below with your own */}
        <img
          className="image"
          src="/333final.jpg"
          alt="img1"
          draggable="false"
        />
        <img
          className="image"
          src="/extracredit.jpg"
          alt="img2"
          draggable="false"
        />
        <img className="image" src="/mathhw.jpg" alt="img3" draggable="false" />
        <img
          className="image"
          src="/405pres.jpg"
          alt="img3"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ImageTrack;
