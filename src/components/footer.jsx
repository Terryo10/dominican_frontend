import React, { Component } from "react";
class FooterComponent extends Component {
  state = {};

  render() {
    const mystyle = {
      height: "50px",
    };
    return (
      <div>
        <footer className="site-footer">
          <div className="footer-content-area">
            <div className="container">
              <div className="footer-widgets">
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="widget about-widget">
                      <div className="footer-logo">
                        <img
                          src="logop.png"
                          alt="Dominican Health"
                          style={mystyle}
                        ></img>
                      </div>
                      <p>Dominican sisters (Mother Patrick and companions)</p>
                    </div>
                  </div>
                

                  <div className="col-lg-auto col-md-5 col-sm-8">
                    <div className="widget contact-widget">
                      <h4 className="widget-title">Contact Us</h4>
                      <ul className="info-list">
                        <li>
                          <span className="icon">
                            <i className="far fa-phone"></i>
                          </span>
                          <span className="info">
                            <span className="info-title">Phone Number</span>
                            <a>+263 778 939 998</a>
                          </span>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="far fa-envelope-open"></i>
                          </span>
                          <span className="info">
                            <span className="info-title">Email Address</span>
                            <a>
                              <span className="__cf_email__">
                                info@dominicanhealth.co.zw
                              </span>
                            </a>
                          </span>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="far fa-map-marker-alt"></i>
                          </span>
                          <span className="info">
                            <span className="info-title">Locations</span>
                            <a>42 Dublin road, Emerald Hill Harare</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright-area">
                <div className="row flex-md-row-reverse">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <p className="copyright-text">
                      © 2021 Dominican Health{" "}
                      <a href="https://designave.co.zw">Powered By DesignAve</a>
                      . All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
