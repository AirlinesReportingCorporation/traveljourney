import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {

    return (<div className="navigationPane">
      <div>
        <div className="navigationLink">
          <Link to="/about/">Intro</Link>
        </div>
        <div className="navigationLink">
          <Link to="/">Inspire</Link>
          <div className="navStep">Step 1</div>
        </div>
        <div className="navigationLink">
          <Link to="/">Shop</Link>
          <div className="navStep">Step 2a</div>
        </div>
        <div className="navigationLink">
          <Link to="/">Offer</Link>
          <div className="navStep">Step 2b</div>
        </div>
        <div className="navigationLink">
          <Link to="/">Purchase</Link>
          <div className="navStep">Step 3</div>
        </div>
        <div className="navigationLink">
          <Link to="/">Pre-Trip</Link>
          <div className="navStep">Step 4</div>
        </div>
        <div className="navigationLink">
          <Link to="/">Trip</Link>
          <div className="navStep">Step 5</div>
        </div>
        <div className="navigationLink">
          <Link to="/">Outcome</Link>
          <div className="navStep">Step 6</div>
        </div>
        <div className="navigationLink">
          <Link to="/">Wrap-up</Link>
        </div>
      </div>
    </div>);
  }
}

export default Navigation;
