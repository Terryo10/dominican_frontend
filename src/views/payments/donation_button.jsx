import React, { Component } from "react";
class PaynowDonateButton extends Component {
  render() {
    return (
      <div>
        <center>
          <a
            href="https://www.paynow.co.zw/Payment/BillPaymentLink/?q=aWQ9MTI3MTkmYW1vdW50PTAuMDAmYW1vdW50X3F1YW50aXR5PTAuMDAmbD0w"
            target="_blank"
          >
            <img
              src="https://www.paynow.co.zw/Content/Buttons/Medium_buttons/button_donate_medium.png"
              //   style="border:0"
            />
          </a>
        </center>
      </div>
    );
  }
}

export default PaynowDonateButton;
