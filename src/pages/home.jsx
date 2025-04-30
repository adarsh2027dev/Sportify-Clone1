// src/pages/Home.jsx
// import React from 'react';

const Home = () => {
  return (
    <div className="home-container" style={styles.container}>
      <h1 style={styles.heading}>🏠 Welcome to Sportify</h1>
      <p style={styles.text}>Your one-stop destination for all things sports!</p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#111',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    textAlign: 'center',
  },
};

export default Home;
