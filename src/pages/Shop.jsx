import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import './Shop.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (<div className="shopPage pagePaneContainer">
      <Pageslide>
        <div className="titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 2a</div>
              <h1>Shop.</h1>
              <div className="sep"></div>
              <p>The traveler searches for a flight <br/>within their desired parameters.</p>
              <img src="img/Shop.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="bulletSlide">
          <h1>The shop-and<br/>-offer cycle is <br/>like a <br/>conversation <br/>between the traveler <br/> and the seller.</h1>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="quoteSlide">
          <div className="quotePhoto">
            <img src="img/lauriQuote.png" alt="Lauri Reishus"/>
          </div>
          <div className="quoteText">
            Personalization is the next
            <br/>
            frontier for our industry.
            <br/>
            It requires massive customer
            <br/>
            data management, insights
            <br/>and analytics &mdash; but it holds
            <br/>
            great promise of getting
            <br/>
            the right product with the
            <br/>
            right price point to the
            <br/>
            right customer.
          </div>
          <div className="quoteMeta">
            LAURI REISHUS<br/>
            Chief Operating Officer, ARC
          </div>
        </div>

      </Pageslide>
      <Slidenav/>
    </div>);
  }
}

export default Shop;
