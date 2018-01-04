import React from 'react';

const Contact = () => {

  const divStyle = {
    height: '100vh',
    background: '#f4fffa',
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
    fontFamily: 'Lato, sans serif',
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#000'
  };

  const aStyle = {
    lineHeight: '1.5em',
    fontSize: '2em',
    fontFamily: 'Roboto, sans-serif',
    color: '#000',
    textDecoration: 'none'
  };

  return (
    <div style={divStyle} id="Contact">
      <div style={container} className="mobileContainer">
        <div style={contentContainer}>
          <h1 style={h1Style} className="h1Class">Contact</h1>
          <h2><a style={aStyle} href="mailto:georgewilman1@gmail.com" className="aClass"><i className="fa fa-envelope-o" aria-hidden="true"></i> georgewilman1@gmail.com</a></h2>
          <h2><a style={aStyle} href="https://github.com/GWilman" target="_blank" rel="noopener noreferrer" className="aClass"><i className="fa fa-github" aria-hidden="true"></i> https://github.com/GWilman</a></h2>
          <h2><a style={aStyle} href="https://twitter.com/GWilman" target="_blank" rel="noopener noreferrer" className="aClass"><i className="fa fa-twitter" aria-hidden="true"></i> https://twitter.com/GWilman</a></h2>
          <h2><a style={aStyle} href="https://linkedin.com/in/GWilman" target="_blank" rel="noopener noreferrer" className="aClass"><i className="fa fa-linkedin-square" aria-hidden="true"></i> https://linkedin.com/in/GWilman</a></h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
