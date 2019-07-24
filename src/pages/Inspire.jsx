import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import $ from 'jquery';
import owlCarousel from "owl.carousel";

import './Inspire.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';

class Inspire extends React.Component {
  constructor(props) {
    super(props);

    this.exploreClick = this.exploreClick.bind(this);
    this.flipClick = this.flipClick.bind(this);
  }

  exploreClick() {
    window.scroll({top: 1920, left: 0, behavior: 'smooth'});
  }

  flipClick() {
    console.log("flipClick");
  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
  }

  render() {

    $('.owl-carousel').owlCarousel({
      center: true,
      autoplay: false,
      loop: true,
      nav: true,
      autoHeight: false,
      autoplayTimeout: 5000,
      autoplaySpeed: 2000,
      smartSpeed: 700,
      URLhashListener: true,
      autoplayHoverPause: true,
      stagePadding: 120,
      navText: [
        '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowLeft.png">', '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowRight.png">'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        720: {
          items: 1
        }
      }
    });

    return (<div className="inspirePage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 1</div>
              <h1>Inspire.</h1>
              <div className="sep"></div>
              <p>The traveler is inspired
                <br/>to take a trip.</p>
              <img src="img/inspire1.png"/>
            </div>
            <div className="section2">
              <p>See how to spark some inspiration.</p>
              <button onClick={this.exploreClick}>Explore</button>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="bulletSlide">
          <h1>The inspiration<br/>to travel is<br/>everywhere,<br/>and it can come<br/>from a number<br/>of sources.</h1>
          <div className="owl-carousel owl-theme">
            <Flipslide frontSide={<div > <h2>Business Trip</h2>
              <img src="img/businessTrip.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Corporate travelers often have urgent business needs that result in last - minute air bookings, but analysis from ARC and Egencia shows that companies can save big by booking 22 days in advance.</div> < div className = "touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
            </div>
          </div>} colorClass="sliderGradientBlue"></Flipslide>
            <Flipslide frontSide={<div > <h2>Family Vacation</h2>
              <img src="img/familyVacation.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>The 2019 Virtuoso Luxe Report identified multigenerational travel as the year’s top vacation trend.In particular, service - oriented travel, genealogy trips and family-friendly cruises are gaining popularity.
                <div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientGreen"></Flipslide>
            <Flipslide frontSide={<div > <h2>Long-Awaited
                <br/>Getaway</h2>
              <img src="img/getaway.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Travel agencies specializing in luxury travel are on the rise.More than half of agency respondents in a recent Phocuswright study, co - sponsored by ARC, indicated that they specialize in river cruises, and 16 % specialize in selling bespoke, a highly customized segment of luxury travel.<div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientPurple"></Flipslide>
          </div>
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
      <Pageslide>
        <div className="endSlide">
          <h2>What Can Data Tell Us?</h2>
        </div>
      </Pageslide>
    </div>);
  }
}

export default Inspire;
