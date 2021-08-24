import React, { Component } from "react";
import HeaderGlobal from "../components/header";
import FooterComponent from "../components/footer";
class ContactPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderGlobal></HeaderGlobal>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Contact Page</h1>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default ContactPage;
