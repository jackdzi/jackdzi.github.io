import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Welcome from '../../components/Welcome/Welcome'
import Navbar from '../../components/Navbar/Navbar'
import "../../styles/index.css";

const Home = () => {
  return (
    <>
      <Welcome />
      <Navbar />
      <Projects />
      <Showcase />
    </>
  );
};

export default Home;
