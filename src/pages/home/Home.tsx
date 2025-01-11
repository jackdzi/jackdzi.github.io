import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Welcome from "../../components/Welcome/Welcome";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import "../../styles/index.css";

const Home = () => {
  return (
    <>
      <Welcome />
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <div className="my-32"></div>
      <Showcase />
      <Footer />
    </>
  );
};

export default Home;
