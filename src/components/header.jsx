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
                      <a href="#">
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
                      <a href="#">
                        <i className="far fa-map-marker-alt"></i> 42 Dublin
                        road, Emerald Hill Harare
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-phone"></i> +263 778 939 998
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-auto d-none d-md-block">
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-wrapper">
            <div className="container">
              <div className="navbar-inner">
                <div className="site-logo">
                  <a href="index.html">
                    <img
                      src="logop.png"
                      alt="Dominican Health"
                      style={mystyle}
                    ></img>
                  </a>
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
                  <a href="#" className="nav-toggler">
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-panel">
            <div className="panel-logo">
              <a href="index.html">
                <img src="logop.png" alt="Funden"></img>
              </a>
            </div>
            <ul className="panel-menu">
              <li>
                <a href="index.html">Home</a>
                <ul className="submenu">
                  <li>
                    <a href="index.html">Home One</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Two</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="project-1.html">Project</a>
                <ul className="submenu">
                  <li>
                    <a href="project-1.html">Project One</a>
                  </li>
                  <li>
                    <a href="project-2.html">Project Two</a>
                  </li>
                  <li>
                    <a href="project-3.html">Project Three</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="events.html">Events</a>
              </li>
              <li>
                <a href="news.html">News</a>
                <ul className="submenu">
                  <li>
                    <a href="news-standard.html">News Standard</a>
                  </li>
                  <li>
                    <a href="news-details.html">News Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="submenu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="company-overview.html">Company Overview</a>
                  </li>
                  <li>
                    <a href="team-member.html">Team Member</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="testimonial.html">Testimonials</a>
                  </li>
                </ul>
              </li>
              <li className="current">
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="panel-extra">
              <a href="events.html" className="main-btn btn-white">
                Donate Now <i className="far fa-arrow-right"></i>
              </a>
            </div>
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
