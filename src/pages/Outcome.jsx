import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import $ from 'jquery';
import owlCarousel from "owl.carousel";
import {Drawer} from 'antd';

import './Outcome.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

class Outcome extends React.Component {
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

    return (<div className="outcomePage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="titleSlide">
          <div className="pagePaneContent">
            <div className="section1">
              <div className="stepNumber">Step 3</div>
              <h1>Outcome.</h1>
              <div className="sep"></div>
              <p>The trip may be over, but
                <br/>its impact is just beginning.
              </p>
              <img src="img/Outcome.png"/>
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
          <h1>The trip may be
            <br/>over, but its
            <br/>impact is just
            <br/>beginning</h1>
          <div className="owl-carousel owl-theme">
            <Flipslide frontSide={<div > <h2>Sharing the
                <br/>Experience</h2>
              <img src="img/businessTrip.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Tweets. Snaps. Instagram photos. Recounting the trip to family members. Making recommendations to a colleague in the breakroom. Travelers share their experiences in all kinds of ways, potentially shifting others’ perceptions of certain brands or destinations.
              </div> < div className = "touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
            </div>
          </div>} colorClass="sliderGradientBlue"></Flipslide>
            <Flipslide frontSide={<div > <h2>Repairing the
                <br/>Relationship</h2>
              <img src="img/familyVacation.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Sometimes, trips don’t go according to plan. But travel brands still have an opportunity to make things right. Quickly and tactfully following up with an acknowledgement, apology or incentive can go a long way in repairing the traveler’s relationship with the brand.
                <div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientGreen"></Flipslide>
            <Flipslide frontSide={<div > <h2>Building Loyalty</h2>
              <img src="img/longAwaitedGetaway.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>The travel journey repeats itself, and every trip impacts the traveler’s perception of your brand. Make that impression last by following up and inspiring new travel, continuing the momentum. Smart personalization can make these follow-ups even more powerful.<div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientPurple"></Flipslide>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide big">
          <h2>What resources do travel brands have to follow up with the traveler?
          </h2>
          <Todaytomorrow today={<div> Travel brands have access to their own sales and customer data,
            and can use that information to follow up with other offers.</div>} tomorrow={<div> Travelers could opt in to create a profile of preferences,
            which could potentially be shared with other trusted sellers of travel.For example,
            a business traveler’s profile could be shared by the TMC and airline,
            enabling channel - agnostic data exchange and servicing.Their travel policy could be layered with that profile,
            informing smarter offer creation.Furthermore,
            NDC and ONE Order will generate richer,
            more centralized data than what exists today.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How can brands build lifetime loyalty?
          </h2>
          <Todaytomorrow today={<div> Airline loyalty programs incentivize customers to book on their preferred airline.Travel advisors,
            agencies and TMCs build loyalty by maintaining trusted relationships with their clients.</div>} tomorrow={<div> Advancements in technology will increase efficiency,
            interconnectedness and personalization across the entire travel journey.Not only does this create a better travel experience,
            but it also enables brands to build trust over time,
            following up on previous experiences to build a richer,
            more meaningful relationship with the traveler across their lifetime.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="textSlide">
          <img src="img/quote.png" alt="quote"/>
          <div className="textSlideContent">
            Travelers evolve over time.
            <br/><br/>
            Today’s twentysomething budget traveler may become an occasional business traveler in her late twenties, a frequent business traveler in her thirties, taking the occasional family vacation with her kids, followed by high-value international business travel in her forties and fifties, and the occasional family vacation with her kids and their kids.<br/>
            <br/>
            Maybe her decades-long loyalty will be with <strong>your</strong> brand.

          </div>
        </div>
      </Pageslide>

    </div>);
  }
}

export default Outcome;
