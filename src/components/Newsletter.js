import React, { Component } from "react";

export class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletter: true
    };
  }
  btnClose = () => {
    this.setState({
      newsletter: false
    });
  };

  newsletterSec = () => {
    return (
      <div>
        <form className="newsletter">
          <p className="close-news" onClick={this.btnClose}>
            x
          </p>
          <h2>Get latest updates in web technologies</h2>
          <p>
            I write articles related to web technologies, such as design trends,
            development tools, UI/UX case studies and reviews, and more. Sign up
            to my newsletter to get them all.
          </p>
          <span className="span-input">
            <input
              type="text"
              className="input-news"
              placeholder="Email address"
            />
            <button className="btn-news">Count Me In</button>
          </span>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Newsletter>
          {this.state.newsletter === true && this.newsletterSec()}
        </Newsletter>
      </div>
    );
  }
}
export default Newsletter;