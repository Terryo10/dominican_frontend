import React, { Component } from "react";
import HeaderGlobal from "./header";
import FooterComponent from "./footer";

class DonationCancel extends Component {
  render() {
    const style = {
      height: 100,
      width: 600,
    };

    return (
      <div>
        <HeaderGlobal></HeaderGlobal>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="text-align-center">
          <img
            style={style}
            src="template/assets/img/paynowmethods.svg"
            alt="Line"
          ></img>
        </div>
        <br></br>
        <br></br>
        <h1>Donation Was Cancelled</h1>
        <br></br>
        <br></br>
        <br></br>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default DonationCancel;
