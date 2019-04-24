import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
              <li><a href="https://twitter.com/julien_begot" target="_blank"><i className="fab fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/in/julien-begot-b69b65183/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                <li><a href="https://github.com/BegotJ" target="_blank"><i className="fab fa-github" /></a></li>
                <li><a href="https://gitlab.com/JBegot" target="_blank"><i className="fab fa-gitlab" /></a></li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2019</li>
                <li><a title="GitHub" target="_blank" href="https://github.com/BegotJ/portfolio">GitHub</a></li>   
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Retour en haut" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
        </React.Fragment>
      );
    }
  }