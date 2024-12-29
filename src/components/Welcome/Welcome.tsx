import { useState, useEffect } from "react";
import useScrollBlock from "./Scroll.tsx";
import "./Welcome.css";
import { preLoaderAnim } from "./animations";

function Welcome() {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [showFirstPreloader, setShowFirstPreloader] = useState(true);

  useEffect(() => {
    preLoaderAnim();
    blockScroll();
    const firstPreloaderTimer = setTimeout(() => {
      setShowFirstPreloader(false);
    }, 100);
    const allowScrollTimer = setTimeout(() => {
      allowScroll();
    }, 5200); // replace 5200 with your desired delay time in milliseconds

    const colorTimer = setTimeout(() => {
      document.documentElement.style.setProperty('--bgcolor', "#d5c4a1");
    }, 1000);

    return () => {
      clearTimeout(firstPreloaderTimer);
      clearTimeout(allowScrollTimer);
      clearTimeout(colorTimer);
    };
  }, []);

  return (
    <>
      <>
        {showFirstPreloader ? (
          <div className="preloader">
            <div className="texts-container">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div className="preloader">
            <div className="texts-container">
              <span>Welcome! </span>
              <span> </span>
              <span>Glad</span>
              <span>You're</span>
              <span>Here</span>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default Welcome;
