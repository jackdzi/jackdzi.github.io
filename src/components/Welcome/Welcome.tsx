import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import SplashScreen from "../SplashScreen/Splashscreen";
import "./Welcome.css";

function Welcome() {
  const [showSplash, setShowSplash] = useState(true);
  const nodeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

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
