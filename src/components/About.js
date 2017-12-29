import React from 'react';

const About = () => {

  const divStyle = {
    height: '100vh',
    background: '#0C1324',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-light.png)',
    boxSizing: 'border-box',
    padding: '5%'
  };

  const container = {
    boxSizing: 'border-box',
    width: '800px',
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

  const blurbContainer = {
    boxSizing: 'border-box',
    height: '100%',
    width: '75%',
    float: 'left',
    paddingRight: '2%',
    display: 'table'
  };

  const text = {
    display: 'table-cell',
    verticalAlign: 'middle'
  };

  const skillsContainer = {
    boxSizing: 'border-box',
    height: '100%',
    width: '25%',
    float: 'right',
    display: 'table'
  };

  const skills = {
    display: 'table-cell',
    verticalAlign: 'middle'
  };

  const h2Style = {
    marginBottom: '2%',
    fontSize: '2.5em',
    fontFamily: 'Bungee Inline, cursive',
    textAlign: 'left',
    color: '#FFF'
  };

  const skillsH2Style = {
    marginBottom: '2%',
    fontSize: '2.5em',
    fontFamily: 'Bungee Inline, cursive',
    textAlign: 'center',
    color: '#FFF'
  };

  const pStyle = {
    marginBottom: '2%',
    lineHeight: '1.2em',
    fontSize: '1.1em',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'left',
    color: '#FFF'
  };

  const ulStyle = {
    marginBottom: '2%',
    marginTop: '3%',
    lineHeight: '1.5em',
    fontSize: '1.1em',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    color: '#FFF'
  };

  return (
    <div style={divStyle} id="About">
      <div style={container} className="mobileContainer">
        <div style={contentContainer} className="contentContainer">
          <div style={blurbContainer} className="blurbContainer">
            <div style={text}>
              <h2 style={h2Style}>About Me</h2>
              <p style={pStyle}>As a former marketing communications executive, I bring with me a broad skill set and an understanding of different perspectives when it comes to tech, having often been involved in development projects from the other side. Since I first began experimenting with code, I was convinced that this was what I wanted to do.</p>
              <p style={pStyle}>I&apos;ve recently completed the Web Development Immersive course at General Assembly in London, which was a great experience and I&apos;m feeling confident with my new skills. </p>
              <p style={pStyle}>Aside from coding, I love electronic music and over the last few years I have become an avid bedroom DJ, occasionally playing at a party for family or friends. I’d love to start producing my own tracks once I’ve got the money for some new gear.</p>
              <p style={pStyle}>American football also piques my interest in a big way. My six-year old fantasy football league with friends takes over my life for the last 16 weeks of the year, but I’m still yet to win a title.</p>
            </div>
          </div>
          <div style={skillsContainer} className="skillsContainer">
            <div style={skills} className="skillsList">
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
