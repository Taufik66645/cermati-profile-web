import React, { Component } from "react";
import { Animated } from "react-animated-css";
import posed from "react-pose";

const BoxCookie = posed.div({
  show: {
    y: 0
  },
  hide: {
    x: -900,
    transition: {
      duration: 1000
    }
  }
});

export default class CookieDialog extends Component {
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

  render() {
    return (
      <Animated animationIn="slideInUp" >
      <BoxCookie pose={this.state.current_pose} className={"dialog-gede"}>
      <div>
        <form className="newsletter">
          <p className="close-news" onClick={this.buttonClicked}>
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
      </BoxCookie>
      </Animated>
    );
  }
}



