import React, { Component } from "react";

export class CookieSection extends Component {
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
      <div className="cookie">
        <p className="cookie-p">
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
        <span>
          <button className="btn-cookie" onClick={this.btnHide}>
            Got it
          </button>
        </span>
      </div>
    );
  };
  render() {
    return (
      <div>
        <CookieSection>
          {this.state.cookie === true && this.cookieSection()}
        </CookieSection>
      </div>
    );
  }
}

export default CookieSection;
