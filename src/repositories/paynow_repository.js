import axios from "axios";

class PaynowPayments {
  baseUrl = "http://127.0.0.1:8000";
  makePayment =async (body)=> {
    var url = "/api/donate_with_paynow";

    axios.post(`${this.baseUrl}${url}`, body).then((res) => {
      return res.data;
    });
  }

  confirmPayment(donation_id) {}
}

export default PaynowPayments;
