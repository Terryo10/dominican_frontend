import React, { Component } from "react";
import { Link } from "react-router-dom";
class PageTitle extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="page-title-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-8">
                <h1 className="page-title">Donations</h1>
              </div>
              <div className="col-auto">
                <ul className="page-breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Donations Page</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PageTitle;
