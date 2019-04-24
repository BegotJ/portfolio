import React, { Component } from 'react';
export default class Contactus extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form action method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">Nom <span className="required">*</span></label>
                    <input type="text" size={35} id="contactName" name="contactName" placeholder="Valjean" defaultValue={""}/>
                  </div>
                  <div>
                    <label htmlFor="contactFirstname">Prénom <span className="required">*</span></label>
                    <input type="text" size={35} id="contactFirstname" name="contactName" placeholder="Jean" defaultValue={""}/>
                  </div>
                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" size={35} id="contactEmail" name="contactEmail" placeholder="jean.valjean33@gmail.com" defaultValue={""}/>
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Sujet</label>
                    <input type="text" size={35} id="contactSubject" name="contactSubject" placeholder="Proposition de projet" defaultValue={""}/>
                  </div>
                  <div>
                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                  </div>
                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form> {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning"> Error boy</div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />Your message was sent, thank you!<br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Adresse et Téléphone</h4>
                <p className="address">
                    <span>Bégot Julien</span><br />
                    <span>Bordeaux, 33800 FR</span><br />
                    <span>07 83 59 39 42</span><br />
                  </p>
              </div>
              <div className="widget widget_tweets">
                <h4 className="widget-title">Derniers Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                       <a href="#"> http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b><a href="#">2 Days Ago</a></b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                       <a href="#"> http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b><a href="#">3 Days Ago</a></b>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
        </React.Fragment>
      );
    }
  }