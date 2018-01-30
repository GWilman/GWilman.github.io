import React from 'react';
import Slider from 'react-slick';

class Projects extends React.Component {

  divStyle = {
    height: '100vh',
    background: '#fff',
    boxSizing: 'border-box',
    padding: '4% 10%'
  }

  container = {
    width: '800px',
    height: '100%',
    margin: '0 auto',
    background: '#fff',
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
    fontFamily: 'Roboto, sans-serif',
    color: '#0C1324'
  }

  imgStyle = {
    width: '60%',
    margin: '0 auto 3%',
    boxShadow: '0 0 20px #0C1324'
  }

  pStyle = {
    marginBottom: '2%',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '1.2em',
    fontSize: '1.1em',
    color: '#0C1324'
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
          <div id="mobileProjects">
            <div>
              <h1 style={this.h1Style}>The Vince Grid</h1>
              <img style={this.imgStyle} src="https://imgur.com/k78hEKk.jpg" />
              <p style={this.pStyle}>React.js, Node.js, Express.js, Socket.IO, MongoDB, SCSS</p>
              <p style={this.pStyle}>The Vince Grid is a fantasy sports application, designed in this instance for the Champions League knockout stages. It is a MERN stack application that implements WebSockets for the live draft client.</p>
              <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_4" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
            </div>
            <hr />
            <div>
              <h1 style={this.h1Style}>GA Feedback</h1>
              <img style={this.imgStyle} src="https://imgur.com/q4G7FCw.png" />
              <p style={this.pStyle}>AngularJS, Node.js, Express.js, MongoDB, SCSS</p>
              <p style={this.pStyle}>Our team produced a feedback system for lessons at General Assembly that allowed students to rate lessons, read/download lesson notes and converse on the group chat. It is a MEAN stack SPA with JWT/bcrypt authentication and features angular-chart.js and moment.js.</p>
              <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_GROUP_PROJECT" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
            </div>
            <hr />
            <div>
              <h1 style={this.h1Style}>TRAX</h1>
              <img style={this.imgStyle} src="https://imgur.com/ROmvpm6.png" />
              <p style={this.pStyle}>Node.js, Express, EJS, MongoDB, SCSS</p>
              <p style={this.pStyle}>TRAX is made for friends to share their favourite music. Users post tracks to the wall, comment on posts and create a personal playlist. This was my first app to feature full RESTful routes and CRUD actions. The app is fully authenticated and responsive, having been designed with mobile in mind.</p>
              <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_2" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
            </div>
            <hr />
            <div>
              <h1 style={this.h1Style}>WeeWords</h1>
              <img style={this.imgStyle} src="https://imgur.com/3yyNskp.png" />
              <p style={this.pStyle}>JavaScript/jQuery, CSS, HTML</p>
              <p style={this.pStyle}>The brief was to design and build an in-browser game using HTML, CSS and JavaScript (jQuery). WeeWords is a challenging 3-level word game and a product of my own imagination rather than a remake of an existing game.</p>
              <p style={this.pStyle}><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/GWilman/WDI_PROJECT_1" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
            </div>
          </div>
          <div style={this.sliderStyle} id="Slider">
            <Slider {...settings}>
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
