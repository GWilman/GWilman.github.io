import React from 'react';

const Home = ({ switchVisibleComponent, handleHover }) => {

  const divStyle = {
    height: '100vh',
    backgroundImage: 'url(https://static.wixstatic.com/media/e152d0_0237487cdb1244faac624d4f83e813a9.png/v1/fill/w_1783,h_962,al_c,usm_0.66_1.00_0.01/e152d0_0237487cdb1244faac624d4f83e813a9.png)',
    boxSizing: 'border-box',
    padding: '10%'
  };

  const navStyle = {
    position: 'fixed',
    height: '100%',
    width: '130px',
    borderRight: '8px solid #fff',
    background: '#000',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  };

  const btnStyle = {
    width: '70%',
    color: '#fff',
    border: '0',
    background: 'transparent',
    textAlign: 'left',
    padding: '1rem 0 .3rem 1rem',
    fontSize: '1.3rem',
    margin: '2rem 0',
    cursor: 'pointer'
  };

  const attrStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '1rem',
    background: '#000',
    color: '#fff',
    fontFamily: 'Lato, sans serif',
    fontSize: '.7rem'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
  };

  const container = {
    boxSizing: 'border-box',
    width: '700px',
    height: '100%',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const contentContainer = {
    background: '#fff',
    boxShadow: '0 0 2px #000',
    padding: '3rem 2rem'
  };

  const h1Style = {
    fontSize: '3.7em',
    fontFamily: 'Raleway, Lato, sans serif',
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#000',
    marginBottom: '1.5rem'
  };

  const h2Style = {
    fontSize: '2rem',
    fontFamily: 'Raleway, Lato, sans serif',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#000'
  };

  const pStyle = {
    marginTop: '10%',
    lineHeight: '1.8rem',
    fontSize: '1.5rem',
    fontFamily: 'Roboto, sans-serif',
    color: '#000'
  };

  return (
    <div>
      <div style={navStyle} id="Nav">
        <button
          className="hvr-underline-from-left"
          style={btnStyle}
          onClick={switchVisibleComponent}
          value="Home"
          onMouseEnter={(value) => handleHover(value)}
          onMouseLeave={(value) => handleHover(value)}
        >
          Home
        </button>
        <button
          className="hvr-underline-from-left"
          style={btnStyle}
          onClick={switchVisibleComponent}
          value="Projects"
          onMouseEnter={(value) => handleHover(value)}
          onMouseLeave={(value) => handleHover(value)}
        >
          Work
        </button>
        <button
          className="hvr-underline-from-left"
          style={btnStyle}
          onClick={switchVisibleComponent}
          value="About"
          onMouseEnter={(value) => handleHover(value)}
          onMouseLeave={(value) => handleHover(value)}
        >
          About
        </button>
        <button
          className="hvr-underline-from-left"
          style={btnStyle}
          onClick={switchVisibleComponent}
          value="Contact"
          onMouseEnter={(value) => handleHover(value)}
          onMouseLeave={(value) => handleHover(value)}
        >
          Contact
        </button>
      </div>
      <div style={divStyle} id="Home">
        <div style={attrStyle} id="Artwork">
          Artwork by <a style={linkStyle} href="https://www.charlesharropgriffiths.com" target="_blank" rel="noopener noreferrer">Charles Harrop-Griffiths</a>
        </div>
        <div style={container}>
          <div style={contentContainer} className="animated fadeInUp">
            <h1 style={h1Style}>George Wilman</h1>
            <h2 style={h2Style}>Web Developer</h2>
            <p style={pStyle}>I&apos;m George and I&apos;m a web developer based in London. Check out my work, find out more about me or get in touch. I&apos;d love to hear from you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
