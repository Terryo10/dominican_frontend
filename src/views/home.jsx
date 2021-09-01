import { Component } from "react";
import HeaderGlobal from "../components/header";
import FooterComponent from "../components/footer";
import IntroComponent from "../components/intro";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderGlobal></HeaderGlobal>
        <IntroComponent></IntroComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default HomePage;
