import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import { ProgressBar } from "react-bootstrap";

class IntroComponent extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      loadingDonationsStatus: true,
      error: false,
      errorMessage: "Sorry Could not fetch donations data",
      currentProgress: 0,
    };
    this.openModal = this.openModal.bind(this);
    this.getDonationsStatus();
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  percentage(partialValue, totalValue) {
    let value = (100 * partialValue) / totalValue;
    return Math.round(value);
  }

  getDonationsStatus = async () => {
    axios.get("https://app.dominicanhealth.co.zw/api/donations").then((res) => {
      console.log(res);
      if (res.status === 200) {
        let rated = res.data.paynow / res.data.rate.rate;
        let manual = res.data.manual_payments;
        let total = rated + res.data.braintree + manual;
        let rounded = Math.round(total);
        let percentageDonated = this.percentage(
          rounded,
          res.data.rate.target_balance
        );
        console.log(total);
        this.setState({
          manuallyDonated: manual,
          rate: res.data.rate.rate,
          zwl: res.data.paynow,
          targetBalance: res.data.rate.target_balance,
          usd: res.data.braintree,
          totalBalance: rounded,
          loadingDonationsStatus: false,
          error: false,
          currentProgress: percentageDonated,
        });
      } else {
        //error happened
        this.setState({
          error: true,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <section className="hero-area-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8 col-sm-11">
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="skn0c0c8zJM"
                  onClose={() => this.setState({ isOpen: false })}
                />
                <div className="hero-text">
                  <h1 className="title wow fadeInLeft" data-wow-delay="0.2s">
                    Harare Dominican Health Facility Fundraising
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="0.3s">
                    Fundraising for construction of The Harare Dominican Health
                    Facility to offer health services to the City of Harare and
                    surrounding communities.
                    {this.state.loadingDonationsStatus ? (
                      "..Loading"
                    ) : (
                      <div>
                        Our Current Donation Target is{" "}
                        <CurrencyFormat
                          value={this.state.targetBalance}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />{" "}
                        , the current donated funds in USD are{" "}
                        <CurrencyFormat
                          value={this.state.manuallyDonated}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />{" "}
                        and the current donated funds in ZWL are{" "}
                        <CurrencyFormat
                          value={this.state.zwl}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />{" "}
                        which adds up to{" "}
                        <CurrencyFormat
                          value={this.state.totalBalance}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                      </div>
                    )}
                  </p>
                  <ul className="hero-btn">
                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                      <Link to="/donate" className="main-btn">
                        Donate <i className="far fa-arrow-right"></i>
                      </Link>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.5s">
                      <a
                        className="video-btn"
                        data-lity
                        onClick={this.openModal}
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-8 col-sm-10 mx-auto wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <div className="hero-img text-lg-right">
                  <img
                    src="template/assets/img/hero/hero-two-img.png"
                    alt="Img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-shapes">
            <div className="hero-line-one">
              <img
                src="template/assets/img/hero/hero-line-3.png"
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
        </section>
        <div className="container">
          <div>
            <div
              className="single-event-item mb-30 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <center>
                <br></br>
                <div className="text-align-center">
                  <h4 className="event-title">
                    <a href="#">Current Progress</a>
                  </h4>
                  <ProgressBar
                    striped
                    variant="danger"
                    now={this.state.currentProgress}
                    label={`${this.state.currentProgress}%`}
                  />
                </div>
              </center>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-12">
            <div className="blog-post-details">
              <div className="post-content">
                <h3 className="title">About the Project.</h3>
                <p>
                  The Dominican Health Facility is intended to offer health
                  services to the City of Harare and surrounding communities in
                  terms of primary health care delivery especially palliative
                  care with special focus on serious health related illnesses
                  (Covid 19 among them) and the terminally ill needs as well as
                  some of the primary health care services.
                </p>
                <br />
                <h3 className="title">The Current Situation</h3>
                <p>
                  Zimbabwe Palliative Care Situational Analysis Report (2014)
                  Although the country report was done in 2014, the findings
                  still stand and made worse by the Covid 19 pandemic. Below are
                  some of the gaps and barriers to palliative care service
                  provision which were highlighted in the report:
                </p>
                <br />
                <ul className="check-list">
                  <li>
                    Few available palliative care services and lack of awareness
                    of the very limited services available.
                  </li>
                  <li>
                    Lack of knowledge and skills among care providers at all
                    levels of the health care delivery system.
                  </li>
                  <li>
                    Emphasized the need for training on palliative care,
                    bereavement counseling and home-based care and to develop
                    listening and communication skills amongst health
                    professionals.
                  </li>
                  <li>
                    Lack of knowledge and expertise in pain assessment and
                    management using the WHO analgesic ladder.
                  </li>
                </ul>
                <br />
                <p>
                  Bearing in mind of the above findings; our Dominican hospital
                  seeks to therefore actively support the efforts of the
                  Zimbabwe Ministry of Health and Child Care’s response to the
                  WHO mandate to all countries to integrate palliative care
                  services in their countries and Zimbabwe was a signatory of
                  the WHA in 2014 to this effect and an important component of
                  SDG #3. The facility will support this by offering specialist
                  palliative care services in a multi-disciplinary manner as
                  well as acting as a resource facility of palliative care
                  clinical mentoring of health workers at all levels.
                </p>
                <br />
                <h3 className="title">Project Site</h3>
                <p>
                  This project will be located at 51 Dublin Road Emerald Hill, a
                  1.4acre area adjacent to other facilities offered by the
                  Dominican Sisters, being – St Johns High School, Emerald Hill
                  School for the Deaf and Children’s home as well as a Home for
                  the elderly and frail Sisters. The proposed Dominican Health
                  Facility will thus provide complementary services to these
                  existing Institutions.
                </p>
                <blockquote>
                  <p>
                    The facility will have a service block housing the
                    administration, kitchen, laundry etc, a medical services
                    block with consultation room, small laboratory, physio room,
                    pharmacy, chapel etc. and admission rooms (40 bedded) 24
                    self-contained rooms, 4 double rooms and 2 triple rooms,
                    sluice rooms, duty room, patient lounges etc.
                  </p>
                </blockquote>
                <br />
                <h3 className="title">Development Budget</h3>
                <h5>Total Investment: US$3,839,500.00</h5>
                <br />
                <table class="table table-hover">
                  <tbody>
                    <tr>
                      <th scope="row">Phase 1</th>
                      <td colspan="2">Service block</td>
                      <td>$680,700.00</td>
                    </tr>
                    <tr>
                      <th scope="row">Phase 2</th>
                      <td colspan="2">Medical services block</td>
                      <td> $994,200.00</td>
                    </tr>
                    <tr>
                      <th scope="row">Phase 3</th>
                      <td colspan="2">
                        Patient rooms and other clinical rooms
                      </td>
                      <td>$1,564,000.00</td>
                    </tr>
                    <tr>
                      <th scope="row">Phase 4</th>
                      <td colspan="2">Double and triple patient rooms</td>
                      <td>$361,500.00</td>
                    </tr>
                    <tr>
                      <th scope="row">Phase 5</th>
                      <td colspan="2">
                        Conversion of existing cottage and garage to
                        administration and radiology
                      </td>
                      <td>$108,300.00</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <br />
                <p>
                  The required staff will be from the Dominican sisters and lay
                  staff. Sustainability of the health facility will be through
                  client user fees and ongoing advocacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroComponent;
