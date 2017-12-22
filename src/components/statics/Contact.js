import React from 'react';

const Contact = () => {

  const divStyle = {
    height: '100vh',
    background: '#F8FFFF',
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
    <div style={divStyle} id="Contact">
      <div style={container}>
        {/* <h1>Contact</h1> */}
      </div>
    </div>
  );
};

export default Contact;
