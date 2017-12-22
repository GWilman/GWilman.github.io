import React from 'react';

const About = () => {

  const divStyle = {
    height: '100vh',
    background: '#0C1324',
    boxSizing: 'border-box',
    padding: '10%'
  };

  const container = {
    width: '700px',
    height: '100%',
    margin: '0 auto',
    textAlign: 'center',
    background: 'red'
  };

  return (
    <div style={divStyle} id="About">
      <div style={container}>
        {/* <h1>About</h1> */}
      </div>
    </div>
  );
};

export default About;
