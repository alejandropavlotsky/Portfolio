import React from 'react';

const titleStyles = {
  fontFamily: 'sans-serif',
  color: '#fff'
}

const homeStyles = {
  display: 'flex',
  justtifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const Home = () => {
  return (
    <div style={homeStyles}>
      <h1 style={titleStyles}>Hello I'm Alejandro Murawczik!</h1>
      <h3 style={titleStyles}>A Junior Frontend Developer!</h3>
    </div>
  );
}

export default Home;