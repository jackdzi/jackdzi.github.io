import { useRef, useEffect } from "react";

const ImageTrack = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = clientX.toString();
    }
  };

  const handleOnUp = () => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = "0";
      trackRef.current.dataset.prevPercentage =
        trackRef.current.dataset.percentage || "0";
    }
  };

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    if (trackRef.current) {
      if (trackRef.current.dataset.mouseDownAt === "0") return;

      const mouseDelta =
        parseFloat(trackRef.current.dataset.mouseDownAt || "0") - clientX;
      const maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * 100;
      const nextPercentage = Math.max(
        0,
        Math.min(
          100,
          parseFloat(trackRef.current.dataset.prevPercentage || "0") + percentage
        )
      );

      trackRef.current.dataset.percentage = nextPercentage.toString();
      trackRef.current.animate(
        { transform: `translate(-${nextPercentage}%, 0%)` },
        { duration: 1200, fill: "forwards" }
      );
      for (const image of trackRef.current.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${nextPercentage}% 50%` },
          { duration: 1200, fill: "forwards" }
        );
      }
    }
  };

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => handleOnDown(e);
    const onMouseMove = (e: MouseEvent) => handleOnMove(e);
    const onMouseUp = () => handleOnUp();
    const onTouchStart = (e: TouchEvent) => handleOnDown(e);
    const onTouchMove = (e: TouchEvent) => handleOnMove(e);
    const onTouchEnd = () => handleOnUp();

    // Add event listeners for mouse and touch
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      // Remove event listeners
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="flex justify-center items-center transform translate-x-1/2 max-width-100vw">
      <div
        id="image-track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
        className="image-track flex justify-center items-center"
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
