import { Component } from "react";
import HeaderGlobal from "../components/header";
import FooterComponent from "../components/footer";
class HomePage extends Component {
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
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default HomePage;
