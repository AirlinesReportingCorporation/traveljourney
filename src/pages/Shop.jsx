import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import $ from 'jquery';
import owlCarousel from "owl.carousel";
import {Drawer} from 'antd';

import './Shop.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

class Shop extends React.Component {
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

  exploreClick() {
    window.scroll({top: 1920, left: 0, behavior: 'smooth'});
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

    return (<div className="shopPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="bulletSlide">
          <h1>The shop-and<br/>-offer cycle
            <br/>is like a
            <br/>conversation
            <br/>between the<br/>
            traveler and
            <br/>the seller.</h1>
          <div className="owl-carousel owl-theme">
            <Flipslide frontSide={<div > <h2>What They Shop For</h2>
              <img src="img/whatTheyShopFor.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Travelers’ search parameters can be incredibly detailed — factoring in dates, cost, routes, connections, timing and brand loyalty. Business travelers also need to consider their corporate travel policy.
              </div> < div className = "touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
            </div>
          </div>} colorClass="sliderGradientBlue"></Flipslide>
            <Flipslide frontSide={<div > <h2>Where They Shop</h2>
              <img src="img/whereTheyShop.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Travelers can shop across a variety of channels. Corporate travelers often shop through an online booking tool (OBT) or their travel management company (TMC). Loyalty customers often shop directly on the airline website. Leisure customers may shop using an online travel agency (OTA) or a trusted travel advisor.
                <div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientGreen"></Flipslide>
            <Flipslide frontSide={<div > <h2>How They Shop</h2>
              <img src="img/howTheyShop.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Travelers often shop with different combinations of search parameters to explore the options available. It’s not uncommon for a customer to shop and re-shop across the span of days or weeks — even exploring other destinations — to find the best fit.<div className="touchBackBtnContainer">
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
            <img src="img/otherQuote.png" alt="Lauri Reishus"/>
          </div>
          <div className="quoteText">
            I think the ideal solution for the traveler would be that you can go online, or you can go to your agency, or whatever channel you want to shop in. You can get access to all of your discounts up front. Anything you are entitled for - maybe you're an elite flier and you get free extra-leg-room seating - that's included in your offer up front, and it works. And you don't have to go to multiple places to find that information.
          </div>
          <div className="quoteMeta">
            SARAH BOYD<br/>
            Senior Manager, Airline Retailing, ARC
          </div>
        </div>

      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What products
            <br/>are available to
            <br/>the traveler?
          </h2>
          <Todaytomorrow today={<div> Different products are available in different purchase channels. Travelers may not have access to the same products through their agency or TMC as they would through the airline website.</div>} tomorrow={<div> Rich airline content,
            available in every sales channel,
            creates a <strong> consistent brand experience</strong>. Travelers have access to the same high-quality products, no matter where they buy.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How can we
            <br/>make shopping <br/>easier?
          </h2>
          <Todaytomorrow today={<div> A lack of transparency makes it challenging for travelers to accurately compare fares. Some fares may include a checked bag or reserved seat, whereas others may upcharge for these amenities.</div>} tomorrow={<div> With NDC, the traveler has <strong> increased transparency</strong> and knows exactly what they’re getting for the price, which enables them to make more informed decisions about their purchase.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <h2>The customer's shopping parameters are just half of the shop-offer cycle. <br/><br/>See what's involved in creating the offers that are returned to the customer. </h2>
          <Link to={{
              pathname: '/',
              anchor: 'offer'
            }}>
            <button className="animated pulse slower infinite">Next Step: Offer</button>
          </Link>
        </div>
      </Pageslide>
    </div>);
  }
}

export default Shop;
