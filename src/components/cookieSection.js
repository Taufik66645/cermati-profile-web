import React, { Component } from "react";

export class cookieSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: true
    };
  }
  btnHide = () => {
    this.setState({
      cookie: false
    });
  };

  cookieSection = () => {
    return (
      <span className="cookie">
        <p>
          By Accessing and using this website, you acknowledge that you have
          read <br />
          and understand Our{" "}
          <a href="https://www.google.com/" className="link">
            Cookie Policy
          </a>{" "}
          ,{" "}
          <a href="https://www.google.com/" className="link">
            Privacy Policy
          </a>{" "}
          and our{" "}
          <a href="https://www.google.com/" className="link">
            Term of Service
          </a>
        </p>
        <button className="btn-cookie" onClick={this.btnHide}>
          Hide
        </button>
      </span>
    );
  };
  render() {
    return (
      <div>
        <cookieSection>
          {this.state.cookie === true && this.cookieSection()}
        </cookieSection>
      </div>
    );
  }
}

export default cookieSection;
