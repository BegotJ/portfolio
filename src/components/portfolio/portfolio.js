import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
<section id="portfolio">
  <div className="row">
    <div className="twelve columns collapsed">
      <h1>Découvrez certains de mes projets.</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-01" title>
              <img alt src="images/portfolio/coffee.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Japanime-io</h5>
                  <p>Développement Web</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title>
              <img alt src="images/portfolio/console.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Agence immobilière</h5>
                  <p>Développement Web</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title>
              <img alt src="images/portfolio/judah.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Autocool Android</h5>
                  <p>Développement Web</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title>
              <img alt src="images/portfolio/into-the-light.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Borne Interactive</h5>
                  <p>Développement Web</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-05" title>
              <img alt src="images/portfolio/farmerboy.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Amortissements</h5>
                  <p>Développement Web</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-06" title>
              <img alt src="images/portfolio/girl.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Autocool PHP</h5>
                  <p>Développement Web</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-07" title>
              <img alt src="images/portfolio/origami.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Arcep LSF</h5>
                  <p>Développement Web</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-08" title>
              <img alt src="images/portfolio/retrocam.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Carte de voeux</h5>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
      </div> {/* portfolio-wrapper end */}
    </div> {/* twelve columns end */}
    {/* Modal Popup
	      --------------------------------------------------------------- */}
    <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt />
      <div className="description-box">
        <h4>Japanime-io</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />PHP, Symfony, Nodejs, Saas, CSS, HTLM5, MySQL, Bootstrap</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
      <div className="description-box">
        <h4>Agence immobilière</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />PHP, Symfony, CSS, HTLM5, MySQL, Bootstrap</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
      <div className="description-box">
        <h4>Autocool Android</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Android, Java, PHP, XML, MySQL</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt />
      <div className="description-box">
        <h4>Borne interactive</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />HTML5, CSS, JavaScript, JQuery</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-04 End */}
    <div id="modal-05" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt />
      <div className="description-box">
        <h4>Amortissements</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />JavaScript, Chartjs, HTML5, CSS, Bootstrap</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-05 End */}
    <div id="modal-06" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
      <div className="description-box">
        <h4>Autocool PHP</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />PHP, CSS, HTML5, MySQL, Bootstrap</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-06 End */}
    <div id="modal-07" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
      <div className="description-box">
        <h4>Arcep LSF</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />PHP, Symfony, Nodejs, Saas, CSS, HTLM5, Mariadb, Bootstrap</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-07 End */}
    <div id="modal-08" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
      <div className="description-box">
        <h4>Carte de voeux</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />PHP, Symfony, Nodejs, Saas, CSS, HTLM5, MySQL, Bootstrap</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
  </div> {/* row End */}
</section>

        </React.Fragment>
      );
    }
  }