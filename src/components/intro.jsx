import React, { Component } from "react";
import { Link } from "react-router-dom";

class IntroComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="hero-area-one">
          <div className="hero-text">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <span className="tagline wow fadeInUp" data-wow-delay="0.3s">
                    Dominican Sisters Funding
                  </span>
                  <h1 className="title wow fadeInUp" data-wow-delay="0.4s">
                    Dominican health facility in Harare
                  </h1>
                  <Link
                    to="/donate"
                    className="main-btn wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    Donate Today <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-shapes">
              <div className="hero-line-one">
                <img
                  src="template/assets/img/hero/hero-line.png"
                  alt="Line"
                ></img>
              </div>
              <div className="hero-line-two">
                <img
                  src="template/assets/img/hero/hero-line-2.png"
                  alt="Line"
                ></img>
              </div>
              <div className="dot-one"></div>
              <div className="dot-two"></div>
            </div>
          </div>
          <div className="hero-images">
            <div
              className="hero-img image-small fancy-bottom wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              <img
                src="template/assets/img/hero/hero-one-small.jpg"
                alt="Image"
              ></img>
            </div>
            <div
              className="hero-img main-img wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <img
                src="template/assets/img/hero/hero-one-big.jpg"
                alt="Image"
              ></img>
            </div>
            <div
              className="hero-img image-small fancy-top wow fadeInRight"
              data-wow-delay="0.7s"
            >
              <img
                src="template/assets/img/hero/hero-one-small-2.jpg"
                alt="Image"
              ></img>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default IntroComponent;
