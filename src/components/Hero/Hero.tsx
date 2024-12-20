import StaggeredText from "../StaggeredText/StaggeredText";
import Dots from "../Dots/Dots";
import { CSSProperties } from 'react';

const Hero = () => {
  return (
    <div style={styles.heroContainer as CSSProperties}>
      <Dots />
      <div style={styles.contentContainer as CSSProperties}>
        <div style={styles.textContainer as CSSProperties}>
          <div className="flex justify-left items-center w-full h-full pb-4">
            <StaggeredText
              text="Hi, I'm Jack"
              className="text-4xl font-serif font-bold text-center text-white leading-tight m-0"
              last={true}
              delay={0}
              small={false}
            />
          </div>
          <StaggeredText
            text="Please give me a job"
            className="text-left"
            delay={1000}
            last={false}
            small={true}
          />
        </div>
        <div className="w-2/5">
          <img
            src="/Jack_Dzialo.jpg"
            alt="Hero Banner"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "relative",
    width: '100%',
    height: '100vh',
    overflow: "hidden",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D4D',
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "50px",
    paddingTop: "60px",
    position: "relative",
    zIndex: 1,
  },
  textContainer: {
    maxWidth: "50%",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "0 0 20px 0",
},
  subtitle: {
    fontSize: "18px",
    margin: "0 0 30px 0",
  },
  buttonContainer: {
    display: "flex",
    gap: "15px",
  },
  primaryButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#007bff",
    backgroundColor: "#fff",
    border: "2px solid #007bff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  imageContainer: {
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default Hero;
