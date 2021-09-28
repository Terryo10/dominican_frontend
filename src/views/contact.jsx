import React, { Component } from "react";
import HeaderGlobal from "../components/header";
import FooterComponent from "../components/footer";
import { Link } from "react-router-dom";
class ContactPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <HeaderGlobal></HeaderGlobal>
        <div>
          <section className="page-title-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-8">
                  <h1 className="page-title">Contact Us</h1>
                </div>
                <div className="col-auto">
                  <ul className="page-breadcrumb">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-section section-gap-extra-bottom">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lx-4 col-lg-5 col-sm-10">
                  <div className="contact-info-text mb-md-70">
                    <div className="common-heading mb-30">
                      <span className="tagline">
                        <i className="fas fa-plus"></i> Donate Projects
                        <span className="heading-shadow-text">Donate</span>
                      </span>
                      <h2 className="title">Ready to Get More Information</h2>
                    </div>
                    <p>Help us build by buying a brick.</p>
                    <Link to="/donate" className="main-btn mt-35">
                      Donate Today <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 offset-xl-1">
                  <div className="contact-info-boxes">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-6 col-sm-10">
                        <div
                          className="info-box text-center wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="icon">
                            <i className="flaticon-place"></i>
                          </div>
                          <div className="info-content">
                            <h5>Our Location</h5>
                            <p>42 Dublin road, Emerald Hill Harare Zimbabwe</p>
                          </div>
                        </div>
                        <div
                          className="info-box text-center mt-30 mb-sm-30 wow fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="icon">
                            <i className="flaticon-envelope"></i>
                          </div>
                          <div className="info-content">
                            <h5>Email Address</h5>
                            <p>
                              <a
                                
                              >
                                info@dominicanhealth.co.zw
                              </a>
                              <br />
                              www.dominicanhealth.co.zw
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-10">
                        <div
                          className="info-box text-center wow fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="icon">
                            <i className="flaticon-phone-call-1"></i>
                          </div>
                          <div className="info-content">
                            <h5>Support 24/7</h5>
                            <p>
                              +263 778 939 998
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default ContactPage;
