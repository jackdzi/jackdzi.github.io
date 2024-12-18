import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Welcome from '../../components/Welcome/Welcome'
import "../../styles/index.css";

const Home = () => {
  return (
    <>
      <Welcome />
      <Projects />
      <Showcase />
    </>
  );
};

export default Home;
