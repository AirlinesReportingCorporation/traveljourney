import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import $ from 'jquery';
import owlCarousel from "owl.carousel";
import {Drawer} from 'antd';

import './Trip.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
  }

  render() {

    return (<div className="tripPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="textSlide">
          <img src="img/quote.png" alt="quote"/>
          <div className="textSlideContent">
            The trip experience begins with mobile check-in 24 hours in advance and spans the traveler’s journey to and through the airport, as well as boarding, flight and transport to their destination.
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What if the traveler needs to make a last-minute change to their trip?</h2>
          <Todaytomorrow today={<div> Air travel is becoming more streamlined, but it is still fragmented in many ways. The customer expects an easy, seamless and customizable buying experience — yet making changes to a ticket can be challenging, and add-on purchases (checked bag, wi-fi, in-flight meal) are each made on a separate transaction. </div>} tomorrow={<div> Because personalized products have already been purchased at the point of sale, the traveler can enjoy a <strong>frictionless experience</strong>, which has been customized to their personal preferences. In a ONE Order environment, ancillary purchases will be connected to the traveler’s order, so all their data will be centralized in one location. </div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide tts2 big">
          <h2>What happens if the flight is cancelled or delayed, and there’s a missed connection? </h2>
          <Todaytomorrow today={<div> In cases of irregular operations (such as inclement weather, delays and cancellations), a traveler’s options for changing their ticket vary depending on where they purchased their ticket. If they purchased through a travel agency or TMC, either that agency or the airline may make changes to the ticket. If they purchased through the airline, a travel agency or TMC is not able to service the ticket. </div>} tomorrow={<div><strong>Channel-agnostic service</strong> will enable TMCs to service all their clients’ airline tickets, regardless of the purchase channel. This will require efficient, real-time transmission of data. Opening up customer service opportunities to agencies in a channel-agnostic servicing environment alleviates strain for the airline, and it creates a more positive experience for the customer. Leveraging technologies like AI and mobile can also help speed resolution.  </div>}></Todaytomorrow>
        </div>
      </Pageslide>

      <Pageslide>
        <div className="endSlide">
          <h2>Fast forward. The traveler has happily made it to their destination. <br/><br/>After enjoying their trip, the traveler ventures back home. (But the journey’s not over yet!) </h2>
          <Link to={{
              pathname: '/',
              anchor: 'outcome'
            }}>
            <button className="animated pulse slower infinite">Next Step: Outcome</button>
          </Link>
        </div>
      </Pageslide>
    </div>);
  }
}

export default Trip;
