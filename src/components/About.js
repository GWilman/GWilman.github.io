import React from 'react';

const About = () => {

  const divStyle = {
    height: '100vh',
    backgroundImage: 'url(https://static.wixstatic.com/media/e152d0_40f67b11e43047f1ad84719ef15d2141.png/v1/fill/w_1795,h_962,al_c,usm_0.66_1.00_0.01/e152d0_40f67b11e43047f1ad84719ef15d2141.png)',
    boxSizing: 'border-box',
    padding: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const container = {
    boxSizing: 'border-box',
    width: '800px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const contentContainer = {
    boxSizing: 'border-box',
    background: '#fff',
    boxShadow: '0 0 2px #000',
    padding: '2rem',
    overflow: 'auto'
  };

  const blurbContainer = {
    boxSizing: 'border-box',
    height: '100%',
    width: '75%',
    float: 'left',
    paddingRight: '2%'
  };

  const skillsContainer = {
    boxSizing: 'border-box',
    height: '100%',
    width: '25%',
    float: 'right'
  };

  const h2Style = {
    marginBottom: '2%',
    fontSize: '2.5em',
    fontFamily: 'Raleway, Lato, sans serif',
    fontWeight: '900',
    textTransform: 'uppercase',
    textAlign: 'left',
    color: '#000'
  };

  const skillsH2Style = {
    marginBottom: '2%',
    fontSize: '2.5em',
    fontFamily: 'Raleway, Lato, sans serif',
    fontWeight: '900',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#000'
  };

  const pStyle = {
    marginBottom: '2%',
    lineHeight: '1.2em',
    fontSize: '1.1em',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'left',
    color: '#000'
  };

  const ulStyle = {
    marginBottom: '2%',
    marginTop: '3%',
    lineHeight: '1.5em',
    fontSize: '1.1em',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    color: '#000'
  };

  return (
    <div style={divStyle} id="About">
      <div style={container} className="mobileContainer">
        <div style={contentContainer} className="contentContainer">
          <div style={blurbContainer} className="blurbContainer">
            <div>
              <h2 style={h2Style}>About Me</h2>
              <p style={pStyle}>As a former marketing communications executive, I bring with me a broad skill set and an understanding of different perspectives when it comes to tech, having often been involved in development projects from the other side. Since I first began experimenting with code, I was convinced that this was what I wanted to do.</p>
              <p style={pStyle}>I&apos;ve recently completed the Web Development Immersive course at General Assembly in London, which was a great experience and I&apos;m feeling confident with my new skills. </p>
              <p style={pStyle}>Aside from coding, I love electronic music and over the last few years I have become an avid bedroom DJ, occasionally playing at a party for family or friends. I’d love to start producing my own tracks once I’ve got the money for some new gear.</p>
              <p style={pStyle}>Stints in Europe living in Rotterdam and Paris were great fun and a wonderful opportunity to learn new languages. I can speak both French and Dutch to intermediate levels and I’m always eager to practice when I get the chance.</p>
            </div>
          </div>
          <div style={skillsContainer} className="skillsContainer">
            <div className="skillsList">
              <h2 style={skillsH2Style} className="listTitle">I know</h2>
              <ul style={ulStyle} className="list">
                <li>Javascript (ES6)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>AngularJS</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>Socket.IO</li>
                <li>AJAX</li>
                <li>jQuery</li>
                <li>CSS/SCSS</li>
                <li>+ more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
