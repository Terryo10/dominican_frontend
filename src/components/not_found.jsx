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
              <img
                src="template/assets/img/error.png"
                alt="Page Not Found"
              ></img>
              <h3>Page Not Found</h3>
            </div>
          </div>
        </section>

        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default NotFound;
