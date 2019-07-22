import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import './Pagepane.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';

class Inspire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (<div className="inspirePage pagePaneContainer">
      <Pageslide>
        <div className="titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 1</div>
              <h1>Inspire.</h1>
              <div className="sep"></div>
              <p>The traveler is inspired <br/>to take a trip.</p>
              <img src="img/inspire1.png"/>
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
          <h1>The inspiration<br/>to travel is<br/>everywhere,<br/>and it can come<br/>from a number<br/>of sources.</h1>
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

export default Inspire;
