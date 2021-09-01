import React, { Component } from "react";
class Loader extends Component {
  state = {};
  render() {
    return (
      <div>
        <center>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div>
            <h4>Please Wait while we proccess</h4>
          </div>
        </center>
      </div>
    );
  }
}

export default Loader;
