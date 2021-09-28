import React, { Component } from "react";
import Loader from "../../components/loading";
import axios from "axios";

class PaynowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      amount: "",
      method: "ecocash",
      phone_number: "",
      loading: false,
      validatedForm: false,
      checkingPayment: false,
      responseMessage: "",
      poll_url: "",
      reCheckingStatus: false,
      cancelledPayment: false,
      connection: false,
      paymentDone: false,
      errors: {},
      disabled: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log("fires");
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      (this.state.amount > 0 && this.state.email !== "",
      this.state.method !== "",
      this.state.name !== "")
    ) {
      this.setState({
        validatedForm: true,
      });
      this.makePayment();
      console.log("form validated kkk");
    }
    if (this.state.validatedForm) {
      console.log("form validated");
      this.makePayment();
    }
  };

  makePayment = async () => {
    let body = {
      name: this.state.name,
      email: this.state.email,
      amount: this.state.amount,
      method: this.state.method,
      phone_number: this.state.phone_number,
    };

    if (body.phone_number.length < 10 || body.phone_number.length > 10) {
      console.log(body.phone_number);
      this.state.errors["phone_number"] = "invalid phone number";
    } else {
      console.log("paying now");
      this.setState({
        loading: true,
      });
      let baseUrl = "https://app.dominicanhealth.co.zw";
      var url = "/api/donate_with_paynow";
      axios
        .post(`${baseUrl}${url}`, body)
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              loading: false,
              responseMessage: res.data.message,
              checkingPayment: true,
              poll_url: res.data.donation.id,
            });
          }
        })
        .catch((error) => {
          console.log(`pane error ${error}`);
          this.setState({
            connection: true,
            loading: false,
          });
        });
    }
  };

  checkPayment = async () => {
    this.setState({
      loading: false,
      reCheckingStatus: true,
      checkingPayment: false,
    });
    let body = {
      id: this.state.poll_url,
    };
    let baseUrl = "https://app.dominicanhealth.co.zw";
    var url = "/api/check_payment";
    axios.post(`${baseUrl}${url}`, body).then((res) => {
      if (res.status === 200) {
        if (res.data.status === "Cancelled") {
          this.setState({
            cancelledPayment: true,
            reCheckingStatus: false,
          });
          console.log("payment was cancelled");
        } else if (res.data.status === "Paid") {
          this.setState({
            loading: false,
            reCheckingStatus: false,
            checkingPayment: false,
            paymentDone: true,
          });
          console.log("payment was made successfully");
        } else if (res.data.status === "Sent") {
          console.log("payment was sent initializing recheck");
          setTimeout(() => this.checkPayment(), 10000);
        }
      }
    });
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
      amount: "",
      method: "ecocash",
      phone_number: "",
      loading: false,
      validatedForm: false,
      checkingPayment: false,
      responseMessage: "",
      poll_url: "",
      reCheckingStatus: false,
      cancelledPayment: false,
      paymentDone: false,
      connection: false,
    });
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
          <Loader></Loader>
        ) : this.state.checkingPayment ? (
          <div>
            <center>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div>
                <h4>
                  A prompt was sent to your phone Please enter your pin and
                  check payment below
                </h4>
              </div>
              <br></br>
              <div>
                <button className="main-btn" onClick={this.checkPayment}>
                  Check Payment <i className="far fa-arrow-right"></i>
                </button>
              </div>
              <br></br>
              <div>
                <button className="main-btn" onClick={this.reset}>
                  Cancel Proceess <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </center>
          </div>
        ) : this.state.reCheckingStatus ? (
          <div>
            <center>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div>
                <h4>Checking Your Payment</h4>
              </div>
            </center>
          </div>
        ) : this.state.cancelledPayment ? (
          <div>
            <center>
              <div>
                <h4>Payment Was Cancelled</h4>
                <button className="main-btn" onClick={this.reset}>
                  Retry Donating <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </center>
          </div>
        ) : this.state.connection ? (
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
        ) : this.state.paymentDone ? (
          <div>
            <center>
              <div>
                <h4>Thank you for donating ...</h4>
                <button className="main-btn" onClick={this.reset}>
                  Click Here if you want to donate more{" "}
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </center>
          </div>
        ) : (
          <div className="comment-form">
            <div className="text-align-center">
              <img
                style={style}
                src="template/assets/img/paynowmethods.svg"
                alt="Line"
              ></img>
            </div>
            <h4 className="template-title">Enter Your Payment Details </h4>
            <br />
            <form onSubmit={this.handleSubmit}>
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
                      (ZWL) $
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
                <div className="col-12 mb-20">
                  <select
                    required
                    className="form-select"
                    value={this.state.method}
                    onChange={this.handleInputChange}
                    name="method"
                  >
                    <option selected>Select Payment Method</option>
                    <option value="ecocash">Ecocash</option>
                    <option value="onemoney">One Money</option>
                    <option value="telecash">TeleCash</option>
                  </select>
                </div>

                <div className="form-group col-12 mb-20">
                  <lable for="exampleFormControlInput1">Phone Number</lable>
                  <input
                    value={this.state.phone_number}
                    onChange={this.handleInputChange}
                    name="phone_number"
                    type="number"
                    className="form-control"
                    placeholder="E.g 0772... "
                    aria-label="phone_number"
                    aria-describedby="basic-addon1"
                    required
                    minlength="5"
                  ></input>
                  <span style={{ color: "red" }}>
                    {this.state.errors["phone_number"]}
                  </span>
                </div>

                <div className="col-12">
                  <div className="input-field">
                    <button className="main-btn" type="submit">
                      Make Donation <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default PaynowPage;
