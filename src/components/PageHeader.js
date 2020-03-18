import React, { Component } from "react";
import logo from "../assets/y-logo-white.png";

export class PageHeader extends Component {
  state = {
    notification: true
  };

  toggleCookie() {
    this.notification = false;
  }

  render() {
    return (
      <div>
        <span className="cookie">
          <p>
            By Accessing and using this website, you acknowledge that you have
            read <br />
            and understand Our Cookie Policy, Privacy Policy and out Term of
            Service
          </p>
          <button className="btn-cookie" onClick={this.toggleCookie()}>
            Got It
          </button>
        </span>
        <div className="page-header">
          <img src={logo} alt="logo" className="logo" />
          <span className="hello">
            <h1>Hello! I'm Yuan Monos</h1>
            <h1>
              <strong>Consult, Design and Develop Website</strong>
            </h1>
            <p>Have Something Great in mind ? Feel free to contact me.</p>
            <p>I'll Help you to make it happen</p>
            <button className="btn">Lets Make Contact</button>
          </span>
        </div>
      </div>
    );
  }
}

export default PageHeader;
