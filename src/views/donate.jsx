import React, { Component } from "react";
import HeaderGlobal from "../components/header";
import FooterComponent from "../components/footer";
import PaynowPage from "./payments/paynow";
import BraintreePage from "./payments/braintree";
// import PageTitle from '../components/page_title';
class DonatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paynow: true,
      braintree: false,
    };
  }

  ecocashSetter = () => {
    console.log("ecocash");
    this.setState({
      braintree: false,
    });
  };

  braintreeSetter = () => {
    console.log("Click happened");
    this.setState({
      braintree: true,
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
                <div className="blog-post-details">
                  <div className="post-content">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src="template/assets/img/paynowmethods.svg"
                          alt="Line"
                        ></img>
                      </div>
                      <div className="col-6">
                        <img
                          src="template/assets/img/braintree.svg"
                          alt="Line"
                        ></img>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button
                          onClick={this.ecocashSetter}
                          className="main-btn"
                        >
                          Pay with paynow <i className="far fa-arrow-right"></i>
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          onClick={this.braintreeSetter}
                          className="main-btn"
                        >
                          Pay via BrainTree
                          <i className="far fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    <div className="post-footer mt-40">
                      {this.state.braintree ? (
                        <BraintreePage />
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
