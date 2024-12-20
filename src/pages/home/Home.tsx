import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Welcome from "../../components/Welcome/Welcome";
import Navbar from "../../components/Navbar/Navbar";
import Hero from '../../components/Hero/Hero'
import { Fade } from "react-awesome-reveal";
import "../../styles/index.css";

const Home = () => {
  return (
    <>
      <Welcome />
      <Hero />
      <Navbar />
      <Fade>
        <Projects />
      </Fade>
      <Fade>
        <Showcase />
      </Fade>
    </>
  );
};

export default Home;
