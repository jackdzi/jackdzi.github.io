import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import SplashScreen from "../SplashScreen/Splashscreen";
import useScrollBlock from "./Scroll.tsx"
import "./Welcome.css";

function Welcome() {
  const [showSplash, setShowSplash] = useState(true);
  const nodeRef = useRef(null);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    blockScroll();

    const timer = setTimeout(() => {
      allowScroll();
      setShowSplash(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [allowScroll, blockScroll]);

  return (
    <CSSTransition
      in={showSplash}
      timeout={500}
      classNames="splash"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="splash-screen">
        <SplashScreen />
      </div>
    </CSSTransition>
  );
}

export default Welcome;
