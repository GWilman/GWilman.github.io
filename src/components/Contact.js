import React from 'react';

const Contact = () => {

  const divStyle = {
    height: '100vh',
    background: '#1A3370',
    boxSizing: 'border-box',
    padding: '10%'
  };

  const container = {
    boxSizing: 'border-box',
    width: '700px',
    height: '100%',
    margin: '0 auto',
    padding: '5% 0',
    textAlign: 'center',
    display: 'table'
  };

  const contentContainer = {
    boxSizing: 'border-box',
    height: '100%',
    display: 'table-cell',
    verticalAlign: 'middle'
  };

  const h1Style = {
    paddingBottom: '5%',
    fontSize: '3.5em',
    fontFamily: 'Bungee Inline, cursive',
    color: '#FFF'
  };

  const h2Style = {
    lineHeight: '1.5em',
    fontSize: '2em',
    fontFamily: 'Roboto, sans-serif',
    color: '#FFF'
  };

  return (
    <div style={divStyle} id="Contact">
      <div style={container}>
        <div style={contentContainer}>
          <h1 style={h1Style}>Contact</h1>
          <h2 style={h2Style}><i className="fa fa-envelope-o" aria-hidden="true"></i> georgewilman1@gmail.com</h2>
          <h2 style={h2Style}><i className="fa fa-github" aria-hidden="true"></i> https://github.com/GWilman</h2>
          <h2 style={h2Style}><i className="fa fa-twitter" aria-hidden="true"></i> https://twitter.com/GWilman</h2>
          <h2 style={h2Style}><i className="fa fa-linkedin-square" aria-hidden="true"></i> https://linkedin.com/in/GWilman</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
