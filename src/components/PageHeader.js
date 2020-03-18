import React, { Component } from "react";
import logo from "../assets/y-logo-white.png";


export class PageHeader extends Component {
  render() {
    return (
      <div className="page-header">
          <img src={logo} alt="logo" className="logo"/>
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
    );
  }
}

export default PageHeader;
