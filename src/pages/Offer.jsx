import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {Drawer} from 'antd';

import './Offer.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      drawerContent: " "
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.exploreClick = this.exploreClick.bind(this);
  }

  exploreClick() {
    window.scroll({top: 1920, left: 0, behavior: 'smooth'});
  }

  showDrawer(content) {
    this.setState({drawerContent: content});
    this.setState({visible: true});
    console.log(content);
  };

  onClose() {
    this.setState({visible: false});
  };

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
  }

  render() {

    let drawerContent = this.state.drawerContent;

    if (drawerContent == "makeOffer") {
      drawerContent = <div>
        <div className="drawerTitle">Making an Offer</div>
        <p>In the travel agency channel today, the GDS creates an offer that matches the traveler’s parameters based on airlines’ availability and fares.
        </p>
        <p>This is returned to the customer in seconds, with an average of X NUMBER OF OFFERS created every minute. In the future, these offers could also be created by the airline.
        </p>
      </div>;

    } else if (drawerContent == "shakeOffer") {
      drawerContent = <div>
        <div className="drawerTitle">Shaking Up
          <br/>the Offer</div>
        <p>New Distribution Capability (NDC) is transforming the nature of offers. Today, offers are built within the framework of the 1950s-era, hand-written airline ticket.
        </p>
        <p>Sure, it’s been adapted slightly over the years, but it offers very little flexibility. That all changes with NDC.
        </p>
      </div>;

    }

    return (<div className="offerPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="textSlide GradientDarkblue">
          <div className="textSlideContent">
            After the traveler submits a shopping request, the industry&nbsp;
            <span onClick={this.showDrawer.bind(this, 'makeOffer')}>makes an offer</span>
            &mdash; or, more likely, many offers from many airlines.
            <br/><br/>New technology infrastructure and distribution strategies are&nbsp;
            <span onClick={this.showDrawer.bind(this, 'shakeOffer')}>shaking up the offer</span>, which has the potential to include more than just an airline ticket.

            <img src="img/allcopyOfferTOP.png" alt=""/>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What’s
            <br/>&mdash; included &mdash;<br/>in an offer?
          </h2>
          <Todaytomorrow today={<div> In the travel agency channel,
            offers are generally restricted to the traditional airline ticket itself.If the traveler wants to purchase a seat upgrade or add a checked bag,
            the travel agency may need to contact the airline directly to make a separate transaction — or the traveler may choose to add on separate transactions on the day of travel.</div>} tomorrow={<div> NDC creates(almost)infinite flexibility for what an offer can contain.Beyond the ticket itself, offers could include < strong > new products and bundles</strong> : things like airport transportation, lounge access or other products from any number of suppliers.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>Are all
            <br/>&mdash; offers &mdash;
            <br/>created equal?
          </h2>
          <Todaytomorrow today={<div> In today’s travel agency channel,
            the GDS constructs an offer based on airline availability,
            schedules and fares.While offers can fluctuate depending on those factors,
            they’re not customizable to the agency or traveler.</div>} tomorrow={<div> NDC creates the possibility of < strong > dynamic offers</strong>,
            which can be customized based on agency - airline relationship,
            loyalty or established traveler preferences.This will make it easier for the traveler to view content that is likely to be the best fit & mdash; and enables agencies to receive rates based on partnership agreements.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>Why are corporate
            <br/>&mdash; contracts such &mdash;
            <br/>
            a headache?
          </h2>
          <Todaytomorrow today={<div> The terms of corporate contracts are generally applied manually,
            after the transaction & mdash;
            which creates room for error.</div>} tomorrow={<div> < strong > Smart contracts</strong> will integrate contract terms up front,
            increasing accuracy and alignment while reducing room for error.This could also extend to corporate program policies, which could filter offers to display only those within corporate policy.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="textSlide GradientPurple">

          <div className="textSlideContent">
            While NDC presents vast opportunities, it will take a few years to fully come to fruition at scale. In the meantime, we are living in a hybrid environment, where existing processes need to reliably function in tandem with new capabilities.<br/><br/>
            Ultimately, an evolved retailing environment will deliver the right content to the right person at the right time.
            <img src="img/allcopyOfferBOTTOM.png" alt=""/>

          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <h2>When the traveler is presented with great offers that match their parameters and preferences, they’re ready to buy.</h2>
          <Link to={{
              pathname: '/',
              anchor: 'purchase'
            }}>
            <button className="animated pulse slower infinite">Next Step: Purchase</button>
          </Link>
        </div>
      </Pageslide>
      <Drawer placement="right" width="960px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}
          <img onClick={this.onClose} src="img/closeIcon.png" alt="Close"/>
        </div>
      </Drawer>
    </div>);
  }
}

export default Offer;
