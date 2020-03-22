import React, { Component } from "react";
import posed from "react-pose";

import logo from "../assets/y-logo-white.png";

const BoxCookie = posed.div({
  show: {
    y: 0
  },
  hide: {
    y: -190,
    transition: {
      duration: 1000
    }
  }
});

export class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_pose: "show"
    };
  }

  buttonClicked = e => {
    this.setState({
      current_pose: "hide"
    });
  };

  contact = () => {
    prompt("Enter your Email Address, We will contact you soon");
  };

  render() {
    return (
      <div>
        <BoxCookie pose={this.state.current_pose} className={"dialog-gede"}>
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
              <button className="btn-cookie" onClick={this.buttonClicked}>
                Got it
              </button>
            </span>
          </div>
          <div className="page-header">
            <img src={logo} alt="logo" className="logo" />
            <span className="hello">
              <h1>Hello! I'm Taufik Hidayat</h1>
              <h1>
                <strong>Consult, Design and Develop Website</strong>
              </h1>
              <p>Have Something Great in mind ? Feel free to contact me.</p>
              <p>I'll Help you to make it happen</p>
              <button className="btn" onClick={this.contact}>
                Lets Make Contact
              </button>
            </span>
          </div>
        </BoxCookie>
      </div>
    );
  }
}

export default PageHeader;
