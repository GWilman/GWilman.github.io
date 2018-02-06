import React from 'react';
import Slider from 'react-slick';

class Projects extends React.Component {

  divStyle = {
    height: '100vh',
    background: '#fff',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/fancy-deboss.png)',
    boxSizing: 'border-box',
    padding: '4% 10%'
  }

  mobileContainer = {
    padding: '5rem 0'
  }

  container = {
    width: '800px',
    height: '100%',
    margin: '0 auto',
    background: '#fff',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/fancy-deboss.png)',
    borderRadius: '10px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  sliderStyle = {
    width: '100%'
  }

  h1Style = {
    fontSize: '2em',
    lineHeight: '2em',
    fontFamily: 'Raleway, Lato, sans-serif',
    color: '#141414'
  }

  imgStyle = {
    width: '60%',
    margin: '0 auto 3%',
    boxShadow: '0 0 20px #000'
  }

  pStyle = {
    marginBottom: '2%',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '1.2em',
    fontSize: '1.1em',
    color: '#141414'
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div style={this.divStyle} id="Projects">
        <div style={this.container} className="mobileContainer">
          <div style={this.mobileContainer} id="mobileProjects">
            <div>
              <h1 style={this.h1Style}>Work</h1>
              <p style={this.pStyle}>Here you can view some of my work, though I would recommend visiting the accompanying GitHub pages for a detailed walkthrough.</p>
              <p style={this.pStyle}>While I'm not working as a web development teaching assistant at General Assembly London, I'm working on my first React Native app.</p>
              <p style={this.pStyle}>In case you're interested, this site was built using React.js.</p>
            </div>
            <hr />
            <div>
              <h1 style={this.h1Style}>The Vince Grid</h1>
              <img style={this.imgStyle} src="https://imgur.com/k78hEKk.jpg" />
              <p style={this.pStyle}>React.js, Node.js, Express.js, Socket.IO, MongoDB, SCSS</p>
              <p style={this.pStyle} className="projDescription">The Vince Grid is a fantasy sports application, designed in this instance for the Champions League knockout stages. It is a MERN stack application that implements WebSockets for the live draft client.</p>
              <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_4" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
            </div>
            <hr />
            <div>
              <h1 style={this.h1Style}>GA Feedback</h1>
              <img style={this.imgStyle} src="https://imgur.com/q4G7FCw.png" />
              <p style={this.pStyle}>AngularJS, Node.js, Express.js, MongoDB, SCSS</p>
              <p style={this.pStyle} className="projDescription">Our team produced a feedback system for lessons at General Assembly that allowed students to rate lessons, read/download lesson notes and converse on the group chat. It is a MEAN stack SPA with JWT authentication and features angular-chart.js and moment.js.</p>
              <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_GROUP_PROJECT" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
            </div>
            <hr />
            <div>
              <h1 style={this.h1Style}>TRAX</h1>
              <img style={this.imgStyle} src="https://imgur.com/ROmvpm6.png" />
              <p style={this.pStyle}>Node.js, Express, EJS, MongoDB, SCSS</p>
              <p style={this.pStyle} className="projDescription">TRAX is made for friends to share their favourite music. Users post tracks to the wall, comment on posts and create a personal playlist. This was my first app to feature full RESTful routes and CRUD actions. The app is fully authenticated and responsive, having been designed with mobile in mind.</p>
              <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_2" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
            </div>
            <hr />
            <div>
              <h1 style={this.h1Style}>WeeWords</h1>
              <img style={this.imgStyle} src="https://imgur.com/3yyNskp.png" />
              <p style={this.pStyle}>JavaScript/jQuery, CSS, HTML</p>
              <p style={this.pStyle} className="projDescription">The brief was to design and build an in-browser game using HTML, CSS and JavaScript (jQuery). WeeWords is a challenging 3-level word game and a product of my own imagination rather than a remake of an existing game.</p>
              <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_1" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
            </div>
          </div>
          <div style={this.sliderStyle} id="Slider">
            <Slider {...settings}>
              {/* <div>
                <h1 style={this.h1Style}>Work</h1>
                <p style={this.pStyle}>Here you can view my work, though I recommend you visit the linked GitHub pages for a more thorough presentation.</p>
                <p style={this.pStyle}>I am currently working as a teaching assistant on General Assembly&apos;s Web Development Immersive course. When I&apos;m not teaching, writing labs and homeworks or helping students with their code, I&apos;m working on my side project - which is currently my first React Native app.</p>
                <p style={this.pStyle}>While you&apos;re here, this website is made with React and uses flexbox, a slick carousel and features some artwork borrowed from a friend.</p>
              </div> */}
              <div>
                <h1 style={this.h1Style}>The Vince Grid</h1>
                <img style={this.imgStyle} src="https://imgur.com/k78hEKk.jpg" />
                <p style={this.pStyle}>React.js, Node.js, Express.js, Socket.IO, MongoDB, SCSS</p>
                <p style={this.pStyle}>The Vince Grid is a fantasy sports application, designed in this instance for the Champions League knockout stages. It is a MERN stack application that implements WebSockets for the live draft client.</p>
                <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_4" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
              </div>
              <div>
                <h1 style={this.h1Style}>GA Feedback</h1>
                <img style={this.imgStyle} src="https://imgur.com/q4G7FCw.png" />
                <p style={this.pStyle}>AngularJS, Node.js, Express.js, MongoDB, SCSS</p>
                <p style={this.pStyle}>Our team produced a feedback system for lessons at General Assembly that allowed students to rate lessons, read/download lesson notes and converse on the group chat. It is a MEAN stack SPA with JWT/bcrypt authentication and features angular-chart.js and moment.js.</p>
                <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_GROUP_PROJECT" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
              </div>
              <div>
                <h1 style={this.h1Style}>TRAX</h1>
                <img style={this.imgStyle} src="https://imgur.com/ROmvpm6.png" />
                <p style={this.pStyle}>Node.js, Express, EJS, MongoDB, SCSS</p>
                <p style={this.pStyle}>TRAX is made for friends to share their favourite music. Users post tracks to the wall, comment on posts and create a personal playlist. This was my first app to feature full RESTful routes and CRUD actions. The app is fully authenticated and responsive, having been designed with mobile in mind.</p>
                <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_2" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
              </div>
              <div>
                <h1 style={this.h1Style}>WeeWords</h1>
                <img style={this.imgStyle} src="https://imgur.com/3yyNskp.png" />
                <p style={this.pStyle}>JavaScript/jQuery, CSS, HTML</p>
                <p style={this.pStyle}>The brief was to design and build an in-browser game using HTML, CSS and JavaScript (jQuery). WeeWords is a challenging 3-level word game and a product of my own imagination rather than a remake of an existing game.</p>
                <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_1" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
