import React, { Component } from "react";
import logo from "../assets/y-logo-white.png";


export class PageHeader extends Component {
  contact = () => {
    prompt("Enter your Email Address, We will contact you soon");
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default PageHeader;
