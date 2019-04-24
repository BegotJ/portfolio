import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Montrer la barre de navigation">Montrer la barre de navigation</a>
            <a className="mobile-btn" href="#" title="Cacher la barre de navigation">Cacher la barre de navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
              <li><a className="smoothscroll" href="#about">Informations</a></li>
              <li><a className="smoothscroll" href="#resume">CV</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projets</a></li>
              <li><a className="smoothscroll" href="#testimonials">Citations</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}.</h1>
              <h3>Je suis <span>{resumeData.role}</span>. Le backend est un peu comme la partie immergée d’un iceberg.
               On ne la voit pas en tant que simple Internaute mais elle représente une très grande partie d’un projet web.</h3>
               <h3>Commencez à <a className="smoothscroll" href="#about">défiler</a> la page
                pour en apprendre plus à <a className="smoothscroll" href="#about">mon sujet</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="https://twitter.com/julien_begot" target="_blank"><i className="fab fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/in/julien-begot-b69b65183/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                <li><a href="https://github.com/BegotJ" target="_blank"><i className="fab fa-github" /></a></li>
                <li><a href="https://gitlab.com/JBegot" target="_blank"><i className="fab fa-gitlab" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
        </React.Fragment>
      );
    }
  }