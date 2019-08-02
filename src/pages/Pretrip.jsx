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
        <div className="bulletSlide">
          <h1>The timeframe between purchase and travel is the pre-trip window (of opportunity).</h1>
          <p className="bulletSub"></p>
          <div className="owl-carousel owl-theme">
            <Flipslide noclick="true" frontSide={<div className = "firstFlipSlide" > The traveler’s attention is drawn to the trip, making this a perfect time to offer additional amenities for a positive travel experience. Swipe to see how you can add to the solution.</div>} backSide={<div className = "firstFlipSlide" ></div>} colorClass="slideTransparent"></Flipslide>
            <Flipslide frontSide={<div > <h2>The Road Warrior</h2>
              <img src="img/roadWarrior.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>A business traveler with extremely long legs is planning his eighth trip this year from Seattle to Sydney. Given his penchant for <strike>watching cat videos on YouTube</strike> catching up on email during his down time, what is the probability that he will be interested in a discounted, in-policy bundle with an Economy Plus upgrade and in-flight wi-fi? (Hint: It’s very high.)
              </div> <div className = "touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
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
            </div>} backSide={<div > <div>Ian is taking a solo trip to Thailand, where he will fly into Chiang Mai and depart from Bangkok. Given the fact that he has 25 stamps in his passport and often buys one-way tickets, what are the odds he might be interested in a guidebook, an international SIM card and/or a two-week train pass? (Hint: The odds are pretty good.)
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
            <img src="img/mikeQuote.png" alt="Mike Premo"/>
          </div>
          <div className="quoteText">
            The pre-trip window is a huge opportunity for our industry. During this time, the traveler is actively thinking about, and planning for, their trip. The traveler wants to be prepared, so they’re especially receptive to offers for products or experiences that will enhance their trip.
          </div>
          <div className="quoteMeta">
            MIKE PREMO<br/>
            President and Chief Executive Officer, ARC
          </div>
        </div>

      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What kinds of
            <br/>pre-trip offers
            <br/>are most effective?
          </h2>
          <Todaytomorrow today={<div> Data is the best source of intelligence for effective offers — by examining the timing and types of offers presented to different customer segments, travel brands can identify their best upsell opportunities.</div>} tomorrow={<div> Through intelligent retail initiatives, travel brands can <strong> equip the traveler</strong> with personalized add-on offers. As travel retailing advances, brands will be able to identify travelers’ previous ancillary purchases, enable travelers to log their preferences, and factor business travel policies into offers.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How can travel brands
            <br/>better analyze
            <br/>their data?
          </h2>
          <Todaytomorrow today={<div> Managing traveler data can be a challenge in today’s landscape, where ancillary purchases are often disconnected from the traveler’s ticket, and the amount of usable data varies depending on the purchase channel. Airline loyalty programs, travel agencies and TMCs’ managed corporate travel programs are likely to have the most holistic insights into traveler trends.</div>} tomorrow={<div> With NDC data, travel brands can more easily <strong> identify patterns</strong> from the traveler’s previous trips — and perhaps leverage broader travel trends to identify the most effective offers for certain destinations.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What happens in
            <br/>the days leading
            <br/>up to the trip?
          </h2>
          <Todaytomorrow today={<div> Some travel brands send email offers to travelers in the days leading up to their trip. Generally speaking, these emails are broad, not tailored to the traveler’s preferences or specific plans.</div>} tomorrow={<div> In the days leading up to the trip, strong communication from the airline and agency creates a positive brand experience and a chance to present the most meaningful, relevant upgrade options to travelers as they <strong> prepare for departure</strong>.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <h2>After much anticipation, the traveler is about to embark on their trip. </h2>
          <Link to={{
              pathname: '/',
              anchor: 'trip'
            }}>
            <button className="animated pulse slower infinite">Next Step: Trip</button>
          </Link>
        </div>
      </Pageslide>
    </div>);
  }
}

export default Pretrip;
