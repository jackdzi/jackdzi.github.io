const SplashScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>Jack Dzialo's Portfolio</div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',
    color: 'white',
    fontSize: '2rem',
    fontFamily: 'serif',
  },
  logo: {
    animation: 'slideIn 2s',
  },
};

export default SplashScreen;
