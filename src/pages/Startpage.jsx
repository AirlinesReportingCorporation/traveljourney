import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Drawer, Button} from 'antd';
import {useSwipeable, Swipeable} from 'react-swipeable'
import {withRouter} from 'react-router-dom';
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import './Startpage.scss';
import Slider from '../components/Slider.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Customlink from '../components/Customlink.jsx';

class Startpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.tapBegin = this.tapBegin.bind(this);
    this.tapGo = this.tapGo.bind(this);
    this.tapGoX = this.tapGoX.bind(this);
    this.linkTo = this.linkTo.bind(this);
  }

  tapBegin() {
    $('.startPage').animate({
      marginLeft: 1080 * -1 + 'px'
    }, 400, "linear");
  }

  tapGo() {
    $('.startPage').animate({
      marginLeft: 1080 * -4 + 'px'
    }, 400, "linear");
  }

  tapGoX(n) {
    $('.startPage').animate({
      marginLeft: 1080 * -n + 'px'
    }, 400, "linear");
  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);

  }

  showDrawer() {
    this.setState({visible: true});
  };

  onClose() {
    this.setState({visible: false});
  };

  linkTo(link) {
    //console.log(this.props.history.push(link));
    this.props.history.push(link);
  }

  scrollHandler(e) {}

  render() {

    let marginl = 0;
    var anchor = this.props.location.anchor;
    var slideWidth = -1080;
    var n = 4;
    switch (anchor) {
      case "inspire":
        marginl = n * slideWidth;
        break;
      case "shop":
        marginl = (n + 1) * slideWidth;
        break;
      case "offer":
        marginl = (n + 2) * slideWidth;
        break;
      case "purchase":
        marginl = (n + 3) * slideWidth;
        break;
      case "pretrip":
        marginl = (n + 4) * slideWidth;
        break;
      case "trip":
        marginl = (n + 5) * slideWidth;
        break;
      case "outcome":
        marginl = (n + 6) * slideWidth;
        break;
      case "wrapup":
        marginl = (n + 7) * slideWidth;
        break;
      default:
        // code block
    }

    return (<div className="sliderContainer">
      <div className="startPage pagePaneContainer" style={{
          marginLeft: marginl
        }} ref={(e) => this.slideMenu = e}>
        <Pageslide noArrow="false">
          <div className="verticalSlide slide1 ">
            <span onClick={this.tapBegin}>
              <h1 className="animated slideInLeft delay-1s">The
                <br/>Travel
                <br/>Journey</h1>
              <img className="animated tada delay-1s" src="img/startPageIcon1.png" alt=""/>
              <p>Tap Here to Begin</p>
              <img className="startPageArrow animated shake slowest infinite" src="img/startPageArrow.png" alt=""/></span>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="verticalSlide textSlide textSlide1" onClick={this.tapGoX.bind(this, 2)}>
            <h1>The travel
              <br/>journey is
              <br/>complex, and
              <br/>it is becoming
              <br/>increasingly
              <br/>personalized.</h1>
              <p>Continue</p>
              <img className="textSlideArrow animated shake slowest infinite" src="img/textSlideArrow.png" alt=""/>
            <img src="img/startPageIcon2.png" alt=""/>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="verticalSlide textSlide textSlide2" onClick={this.tapGoX.bind(this, 3)}>
            <img src="img/startPageIcon3.png" alt=""/>
            <h1>It begins with
              <br/>a spark of
              <br/>
              travel inspira-
              <br/>tion, spans the
              <br/>entirety of trip
              <br/>planning and
              <br/>continues
              <br/>through the
              <br/>trip itself.
            </h1>
            <p>Continue</p>
            <img className="textSlideArrow animated shake slowest infinite" src="img/textSlideArrow.png" alt=""/>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="verticalSlide textSlide textSlide3">
            <div className="textSlideTop">
              <h1>See how the
                <br/>travel industry
                <br/>can create a
                <br/>more seamless,
                <br/>integrated
                <br/>travel journey,
                <br/>from beginning
                <br/>to end.
              </h1>/>
              <img src="img/startPageIcon4.png" alt=""/>
            </div>
            <div className="textSlideBottom">
              <p>Explore the Travel Journey.</p>
              <button className="animated pulse slower infinite" onClick={this.tapGo}>Let's Go</button>
            </div>
          </div>
        </Pageslide>
        <Pageslide>
          <div className=" verticalSlide titleSlide">
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
                <p>See how travel brands can spark inspiration.</p>
                <Link to="/inspire/">
                  <button className="animated pulse slower infinite">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </Pageslide>
        <Pageslide>
          <div className="shopPage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="section1">
                <div className="stepNumber">Step 2a</div>
                <h1>Shop.</h1>
                <div className="sep"></div>
                <p>The traveler provides the
                  <br/>parameters for their desired trip.</p>
                <img src="img/Shop.png"/>
              </div>
              <div className="section2">
                <p>Learn how the shopping experience shapes the trip.</p>
                <Link to="/shop/">
                  <button className="animated pulse slower infinite">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </Pageslide>
        <Pageslide>
          <div className="offerPage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="section1">
                <div className="stepNumber">Step 2b</div>
                <h1>Offer.</h1>
                <div className="sep"></div>
                <p>After the traveler searches for a flight,
                  <br/>they recieve a variety of offers.</p>
                <img src="img/Offer.png"/>
              </div>
              <div className="section2">
                <p>See how those offers are generated.</p>
                <Link to="/offer/">
                  <button className="animated pulse slower infinite">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </Pageslide>
        <Pageslide>
          <div className="purchasePage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="section1">
                <div className="stepNumber">Step 3</div>
                <h1>Purchase.</h1>
                <div className="sep"></div>
                <p>The traveler purchases their airline tickets
                  <br/>(through a process that’s more complex than you might expect).</p>
                <img src="img/Purchase.png"/>
              </div>
              <div className="section2">
                <p>Learn how the purchase works,
                  <br/>and how we can enhance it.
                </p>
                <Link to="/purchase/">
                  <button className="animated pulse slower infinite">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </Pageslide>
        <Pageslide>
          <div className="pretripPage verticalSlide titleSlide">
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
                <p>See why this step of the travel journey
                  <br/>is often underestimated.</p>
                <Link to="/pretrip/">
                  <button className="animated pulse slower infinite">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </Pageslide>
        <Pageslide>
          <div className="tripPage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="section1">
                <div className="stepNumber">Step 5</div>
                <h1>Trip.</h1>
                <div className="sep"></div>
                <p>The traveler embarks on their journey.
                </p>
                <img src="img/Trip.png"/>
              </div>
              <div className="section2">
                <p>With dozens of touch points on the day of travel,
                  <br/>brands have many opportunities to reduce friction.</p>
                <Link to="/trip/">
                  <button className="animated pulse slower infinite">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </Pageslide>
        <Pageslide>
          <div className="outcomePage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="section1">
                <div className="stepNumber">Step 6</div>
                <h1>Outcome.</h1>
                <div className="sep"></div>
                <p>The traveler's experience — positive, neutral or negative — informs their own future decisions, as well as those of friends, family, colleagues and social media connections with whom they share their experiences.</p>
                <img src="img/Outcome.png"/>
              </div>
              <div className="section2">
                <p>See how the traveler’s experience creates a ripple effect.
                </p>
                <Link to="/outcome/">
                  <button className="animated pulse slower infinite">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="textSlide verticalSlide wrapupSlide">
            <h2>The Journey Continues.</h2>
            <p>The travel journey repeats with every trip and travel experience. Travel brands can build momentum &mdash; and loyalty &mdash; by continuously advancing their offerings and delivering even better customer experiences.</p>
            <div className="wrapupArrow" onClick={this.tapGoX.bind(this, 0)}>

                <span >Continue the Momentum</span>
                <img src="img/startPageArrow.png" alt=""/>

            </div>
          </div>
        </Pageslide>
      </div>
    </div>);
  }
}

export default withRouter(Startpage);
