import React, { Component } from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
class BraintreePage extends Component {
  instance;
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state = {
    clientToken: null,
    name: "",
    email: "",
    amount: "",
    phone_number: "",
    tokenError: false,
    error: false,
    loading: false,
    processingTransaction: false,
    transactionSuccessfull: false,
    paymentError: false,
    errorMessage: "",
    message: "",
    disabled: true,
  };

  handleInputChange(event) {
    console.log("fires");
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async componentDidMount() {
    // Get a client token for authorization from your server
    this.getToken();
  }

  async getToken() {
    this.setState({
      loading: true,
      error: false,
      paymentError: false,
      tokenError: false,
      processingTransaction: false,
      transactionSuccessfull: false,
      paymentError: false,
    });
    axios
      .get("https://app.dominicanhealth.co.zw/api/get_token")
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            clientToken: res.data.token,
            loading: false,
          });
        } else {
          //error handling
          this.setState({
            error: true,
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log("err happened");
        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  async payDonation(event) {
    // Send the nonce to your server
    event.preventDefault();
    const { nonce } = await this.instance.requestPaymentMethod();
    let body = {
      noun: nonce,
      name: this.state.name,
      email: this.state.email,
      amount: this.state.amount,
      phone_number: this.state.phone_number,
    };
    this.setState({
      processingTransaction: true,
    });
    axios
      .post("https://app.dominicanhealth.co.zw/api/make_payment", body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("transaction success");
          this.setState({
            error: false,
            processingTransaction: false,
            transactionSuccessfull: true,
            message: res.data.message,
          });
        } else {
          // error from server
          this.setState({
            error: false,
            processingTransaction: false,
            transactionSuccessfull: false,
            paymentError: true,
            errorMessage: res.data.message,
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: true,
          processingTransaction: false,
        });
      });
  }

  reset = () => {
    this.getToken();
  };

  render() {
    const style = {
      height: 100,
      width: 600,
    };
    return (
      <div>
        {this.state.disabled ? (
          <div>
            <center>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div>
                <h4>Sorry This Payment Method Is Currently Disabled</h4>
              </div>
            </center>
          </div>
        ) : this.state.loading ? (
          <div>
            <center>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div>
                <h4>Please Wait ... Loading Secure Payment</h4>
              </div>
            </center>
          </div>
        ) : this.state.paymentError ? (
          <div>
            <center>
              <div>
                <h4>PaymentError ...</h4>
                <br></br>
                <h6>{this.state.errorMessage}</h6>
                <button className="main-btn" onClick={this.reset}>
                  Click Here to try again <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </center>
          </div>
        ) : this.state.processingTransaction ? (
          <div>
            <center>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div>
                <h4>Please Wait ... processing your transaction</h4>
              </div>
            </center>
          </div>
        ) : this.state.transactionSuccessfull ? (
          <div>
            <center>
              <div>
                <h4>Thank you for donating ...</h4>
                <br></br>
                <h6>{this.state.message}</h6>
                <button className="main-btn" onClick={this.reset}>
                  Click Here if you want to donate more{" "}
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </center>
          </div>
        ) : this.state.error ? (
          <div>
            <center>
              <div>
                <h4>Oops Something happened !!</h4>
                <button className="main-btn" onClick={this.reset}>
                  Retry Donating <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </center>
          </div>
        ) : (
          <div>
            <div className="comment-form">
              <div className="text-align-center">
                <img
                  style={style}
                  src="template/assets/img/braintree.svg"
                  alt="Line"
                ></img>
              </div>
              <h4 className="template-title">Enter Your Payment Details </h4>
              <br />
              <form onSubmit={this.payDonation.bind(this)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-field mb-20">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field mb-20">
                      <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email Address"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        (USD) $
                      </span>
                      <input
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleInputChange}
                        type="number"
                        className="form-control"
                        placeholder="Enter your donation amount"
                        aria-label="Amount"
                        min="1"
                        aria-describedby="basic-addon1"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className=" col-md-12">
                    <input
                      value={this.state.phone_number}
                      onChange={this.handleInputChange}
                      name="phone_number"
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    ></input>
                  </div>
                </div>

                <DropIn
                  options={{
                    authorization: this.state.clientToken,
                    // paypal: {
                    //   singleUse: true,
                    //   amount: this.state.amount,
                    //   currency: "USD",
                    // },
                    // googlePay: {
                    //   singleUse: true,
                    // },
                  }}
                  onInstance={(instance) => (this.instance = instance)}
                />
                <button className="main-btn" type="submit">
                  Donate <i className="far fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BraintreePage;
