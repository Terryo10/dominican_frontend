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
    const response = await axios.get("http://127.0.0.1:8000/api/get_token");
    const clientToken = await response.data.token; // If returned as JSON string

    this.setState({
      clientToken,
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
    axios.post("http://127.0.0.1:8000/api/make_payment", body).then((res) => {
      console.log(res);
    });
  }

  render() {
    if (!this.state.clientToken) {
      return (
        <center>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div>
            <h4>Please Wait ... Loading Secure Payment</h4>
          </div>
        </center>
      );
    } else {
      return (
        <div>
          <div className="comment-form">
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
                options={{ authorization: this.state.clientToken }}
                onInstance={(instance) => (this.instance = instance)}
              />
              <button className="main-btn" type="submit">
                Donate <i className="far fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default BraintreePage;
