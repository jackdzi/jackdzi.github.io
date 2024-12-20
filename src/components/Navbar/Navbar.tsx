// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom"; // Use react-router-dom for navigation
import ThemeToggle from "../Darkmode/Darkmode";
// import menuData from "./menuData";

const Header = () => {

  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <ThemeToggle />
    </div>
  );
};

export default Header;
