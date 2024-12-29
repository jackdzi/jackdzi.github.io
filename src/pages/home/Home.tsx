import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Welcome from "../../components/Welcome/Welcome";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";
import "../../styles/index.css";

const Home = () => {
  return (
    <>
      <Welcome />
      <Hero />
      <Navbar />
      <Fade>
        <About />
      </Fade>
      <Fade>
        <Projects />
      </Fade>
      <Fade>
        <Showcase />
      </Fade>
      <Footer />
    </>
  );
};

export default Home;
