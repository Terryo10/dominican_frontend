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
                    <p>
                      Sedut perspiciatis unde omnis natus voluptatem accusantium
                      dolore dantiumy totam apeam eaquey quaventore veritatis
                      architecto beatae.
                    </p>
                    <a href="events.html" className="main-btn mt-35">
                      Get Free Quote <i className="far fa-arrow-right"></i>
                    </a>
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
                            <p>5075 Main Road, D- Block, 2nd Floor, New York</p>
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
                                href="https://webtend.net/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="0a797f7a7a65787e63646c654a6d676b636624696567"
                              >
                                [email&#160;protected]
                              </a>{" "}
                              <br />
                              www.funden.com
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
                              +012 (345) 689 37 <br />
                              012345687
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
