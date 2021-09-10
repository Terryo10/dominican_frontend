import React, { Component } from "react";
import { Link } from "react-router-dom";
class HeaderGlobal extends Component {
  state = {};
  render() {
    const mystyle = {
      height: "50px",
    };
    return (
      <div>
        <header className="site-header sticky-header">
          <div className="header-topbar d-none d-sm-block">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <ul className="contact-info">
                    <li>
                      <a>
                        <i className="far fa-envelope"></i>{" "}
                        <span
                          className="__cf_email__"
                          data-cfemail="c4b7b1b4b4abb6b084a3a9a5ada8eaa7aba9"
                        >
                          info@dominicanhealth.co.zw
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="far fa-map-marker-alt"></i> 42 Dublin
                        road, Emerald Hill Harare
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="far fa-phone"></i> +263 778 939 998
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-auto d-none d-md-block"></div>
              </div>
            </div>
          </div>
          <div className="navbar-wrapper">
            <div className="container">
              <div className="navbar-inner">
                <div className="site-logo">
                  <div className="row">
                    <div>
                      <Link to="/">
                        <img
                          src="kkk.svg"
                          alt="Dominican Health"
                          style={mystyle}
                        ></img>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="nav-menu">
                  <ul>
                    <li>
                      <Link to="/home">Home</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-extra d-flex align-items-center">
                  <Link
                    to="/donate"
                    className="main-btn nav-btn d-none d-sm-inline-block"
                  >
                    Donate Now <i className="far fa-arrow-right"></i>
                  </Link>
                  <a className="nav-toggler">
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-panel">
            <div className="panel-logo">
              <Link to="/">
                <img src="logop.png" alt="Dominican Sisters"></img>
              </Link>
            </div>
            <ul className="panel-menu">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/">Events</a>
              </li>
            </ul>

            <a href="#" className="panel-close">
              <i className="fal fa-times"></i>
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderGlobal;
