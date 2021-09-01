import { Component } from "react";
import HeaderGlobal from "./header";
import FooterComponent from "./footer";
class NotFound extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderGlobal></HeaderGlobal>
        <section className="testimonials-section section-gap">
          <div className="container">
            <div className="common-heading text-center mb-30">
              <img src="assets/img/logo.png" alt="Page Not Found"></img>
            </div>
          </div>
        </section>

        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default NotFound;
