import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import './Navigation.scss';
import Slidenav from '../components/Slidenav.jsx';
import Inspire from './Inspire.jsx';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (<div className="navigationPane">
      <div>
        <div className="navigationLink">
          <Link to="/about">Intro</Link>
        </div>
        <div className="navigationLink">
          <div className="navStep">Step 1</div>
          <Link to="/inspire">Inspire</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 2a</div>
          <Link to="/shop">Shop</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 2b</div>
          <Link to="/offer">Offer</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 3</div>
          <Link to="/purchase">Purchase</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 4</div>
          <Link to="/pretrip">Pre-Trip</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 5</div>
          <Link to="/trip">Trip</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 6</div>
          <Link to="/outcome">Outcome</Link>

        </div>
        <div className="navigationLink">
          <Link to="/">Wrap-up</Link>
        </div>
      </div>
    </div>);
  }
}

export default Navigation;
