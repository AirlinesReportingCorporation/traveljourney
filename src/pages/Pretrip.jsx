import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import $ from 'jquery';
import owlCarousel from "owl.carousel";
import {Drawer} from 'antd';

import './Pretrip.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

class Pretrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      stagePadding: 160,
      navText: [
        '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowLeft.png">', '<div class="swipeLeft"><img src="img/whiteSlideArrow.png"> Swipe</div>'
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

    return (<div className="pretripPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 4</div>
              <h1>Pre-Trip.</h1>
              <div className="sep"></div>
              <p>The traveler actively prepares
                <br/>for their trip.</p>
              <img src="img/Pretrip.png"/>
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
          <h1>The timeframe between purchase and travel is the pre-trip window. (of opportunity)</h1>
          <p className="bulletSub">The traveler’s attention is drawn to the trip, making this a perfect time to offer additional amenities that will create a more positive travel experience.</p>
          <div className="owl-carousel owl-theme">
            <Flipslide frontSide={<div > <h2>The Road Warrior</h2>
              <img src="img/roadWarrior.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>A business traveler with extremely long legs is planning his eighth trip this year from Seattle to Sydney. Given his penchant for watching cat videos on YouTube during his down time, what are the statistical odds that he will be interested in a discounted bundle with an Economy Plus upgrade and in-flight wi-fi?
              </div> < div className = "touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
            </div>
          </div>} colorClass="sliderGradientBlue"></Flipslide>
        <Flipslide frontSide={<div > <h2>The Vacationing Family</h2>
              <img src="img/familyVacation.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Two frazzled parents and three kids (who are, somehow, always hungry) are traveling from New York to Hawaii on spring break. If the total distance is 4,969 miles, with the plane traveling at 500 knots, at what speed will the parents whip out a credit card to buy snacks and in-flight movies? (Unless, of course, they already have peace of mind after buying in-flight entertainment and meals ahead of time.)
                <div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientGreen"></Flipslide>
            <Flipslide frontSide={<div > <h2>The Explorer</h2>
              <img src="img/theExplorer.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Samuel is taking a solo trip to Thailand, where he will fly into Chiang Mai and depart from Bangkok. Given the fact that he has 25 stamps in his passport and often buys one-way tickets, what are the odds he might be interested in a guidebook, an international SIM card and/or a two-week train pass?
                <div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientDarkblue"></Flipslide>
            <Flipslide frontSide={<div > <h2>The Luxury Traveler</h2>
              <img src="img/luxuryTraveler.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Alex works hard, so when she vacations, she doesn’t want to worry about a thing. Her travel advisor has booked her a first-class flight to the Maldives and a hotel stay in a luxury overwater bungalow. To maximize tranquility, could the travel advisor call Alex a week before her trip to offer black-car airport pickup and drop-off, as well as airport lounge access? (For Extra Credit: How jealous will we be when Alex shares her vacation photos on Instagram?)
                <div className="touchBackBtnContainer">
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
    </div>);
  }
}

export default Pretrip;
