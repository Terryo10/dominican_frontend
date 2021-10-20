import React, { Component } from "react";
import HeaderGlobal from "../components/header";
import FooterComponent from "../components/footer";
import PaynowPage from "./payments/paynow";
import BraintreePage from "./payments/braintree";
import BankPage from "./payments/bank_page";
import PaynowDonateButton from "./payments/donation_button";
import GoFundMe from "./payments/gofundme";
// import PageTitle from '../components/page_title';
class DonatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paynow: true,
      braintree: false,
      bankTransfares: false,
      redirectPayment: false,
    };
  }

  ecocashSetter = () => {
    console.log("ecocash");
    this.setState({
      braintree: false,
      paynow: true,
      bankTransfares: false,
      redirectPayment: false,
    });
  };

  braintreeSetter = () => {
    console.log("braintree");
    this.setState({
      braintree: true,
      paynow: false,
      bankTransfares: false,
      redirectPayment: false,
    });
  };

  bankSetter = () => {
    console.log("bank transfare");
    this.setState({
      braintree: false,
      paynow: false,
      bankTransfares: true,
      redirectPayment: false,
    });
  };

  buttonSetter = () => {
    console.log("redirect payment");
    this.setState({
      braintree: false,
      paynow: false,
      bankTransfares: false,
      redirectPayment: true,
    });
  };

  render() {
    return (
      <div>
        <HeaderGlobal></HeaderGlobal>

        <section className="blog-area section-gap-extra-bottom primary-soft-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card text-center">
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                        {this.state.paynow ? (
                          <a
                            className="nav-link active"
                            onClick={this.ecocashSetter}
                          >
                            {" "}
                            Ecocash/Onemoney/Telecash
                          </a>
                        ) : (
                          <a className="nav-link" onClick={this.ecocashSetter}>
                            {" "}
                            Ecocash/Onemoney/Telecash
                          </a>
                        )}
                      </li>
                      <li className="nav-item">
                        {this.state.bankTransfares ? (
                          <a
                            className="nav-link active"
                            onClick={this.bankSetter}
                          >
                            {" "}
                            Bank Wire Transfare
                          </a>
                        ) : (
                          <a className="nav-link" onClick={this.bankSetter}>
                            {" "}
                            Bank Wire Transfare
                          </a>
                        )}
                      </li>
                      <li className="nav-item">
                        {this.state.redirectPayment ? (
                          <a
                            className="nav-link active"
                            onClick={this.buttonSetter}
                          >
                            {" "}
                            VPayments/Visa/MasterCard/Nostro
                          </a>
                        ) : (
                          <a className="nav-link" onClick={this.buttonSetter}>
                            {" "}
                            VPayments/Visa/MasterCard/Nostro
                          </a>
                        )}
                      </li>
                      <li className="nav-item">
                        {this.state.braintree ? (
                          <a
                            className="nav-link active"
                            onClick={this.braintreeSetter}
                          >
                            {" "}
                            GoFundMe
                          </a>
                        ) : (
                          <a className="nav-link" onClick={this.braintreeSetter}>
                            {" "}
                            GoFundMe
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="post-footer mt-40">
                      {this.state.braintree ? (
                        <GoFundMe />
                      ) : this.state.bankTransfares ? (
                        <BankPage />
                      ) : this.state.redirectPayment ? (
                        <PaynowDonateButton></PaynowDonateButton>
                      ) : (
                        <PaynowPage />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default DonatePage;
