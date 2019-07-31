import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {Drawer} from 'antd';

import './Purchase.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleBlue: false,
      drawerContent: " "
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.showDrawerBlue = this.showDrawerBlue.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showDrawer(content) {
    this.setState({drawerContent: content});
    this.setState({visible: true});
  };

  showDrawerBlue() {
    this.setState({visibleBlue: true});
  }

  onClose() {
    this.setState({visible: false});
    this.setState({visibleBlue: false});
  };

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
  }

  render() {

    let drawerContent = this.state.drawerContent;

    if (drawerContent == "order") {
      drawerContent = <div>
        <div className="order">Order Creation</div>
        <p>When a customer decides to book a ticket through a travel agency, an order is created. Today, the GDS creates the order based on input from the airline and travel agency. As a result, a ticket, passenger name record (PNR) and reservation are created and relayed to the airline and travel agency.
        </p>
        <div><img className="chartIMG" src="img/ordercreationsChartBIG.png" alt="Order Creation"/></div>
      </div>;

    } else if (drawerContent == "payment") {
      drawerContent = <div>
        <div className="payment">Payment</div>
        <p>The traveler provides the agency with a form of payment — cash or credit card. ARC facilitates this payment to ensure it’s delivered to the airline.</p>
        <p>In the future, tickets will be replaced by orders, which can contain any number of service items: tickets for multiple people, airline ancillary purchases, and presumably third-party products (e.g., rideshare credits).</p>
        <div><img className="chartIMG" src="img/paymentChartBIG.png" alt="Order Creation"/></div>
      </div>;
    } else if (drawerContent == "settlement") {
      drawerContent = <div>
        <div className="settlement">Settlement</div>
        <p>ARC facilitates the settlement process between thousands of travel agencies and hundreds of airlines. If the payment is in cash, ARC deducts that amount from the travel agency’s bank account. If it’s a credit card payment, ARC initiates the credit card billing, and the credit card brand delivers that amount to the airline.</p>
        <p>ARC’s position as an industry connector gives it a unique, industrywide view of payment, pricing and travel trends. The global travel community relies on this data to effectively benchmark their performance, create new travel routes and build better relationships with industry partners.
        </p>
        <div><img className="chartIMG" src="img/settlementChartBIG.png" alt="Order Creation"/></div>
      </div>;
    }

    return (<div className="purchasePage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="quoteSlide">
          <div className="quoteText">
            <img src="img/wordBubbles.png" alt=""/>
            <div className="quoteNew">When you buy an airline ticket from a travel agency or TMC, a series of complex, behind-the-scenes processes begins.</div>
          </div>
        </div>

      </Pageslide>
      <Pageslide>
        <div className="customPurchaseSlide">
          <div className="customPurchaseSlideSub">Behind the Scenes:</div>
          <h1>How the Air<br/>
            Travel Purchase
            <br/>Works</h1>
          <p>The purchase is complex, with order
            <br/>creation, payment and settlement
            <br/>each necessitating a set of processes
            <br/>across parties.</p>
          <div className="stepOrderContainer">
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'order')}>
              Step 1:&nbsp;
              <strong>Order Creation</strong>
              <img src="img/ordercreationsChartSMALL.png" alt="Order Creation"/>
            </div>
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'payment')}>
              Step 2:&nbsp;
              <strong>Payment</strong>
              <img src="img/paymentChartSMALL.png" alt="Payment"/>
            </div>
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'settlement')}>
              Step 3:&nbsp;
              <strong>Settlement</strong>
              <img src="img/settlementChartSMALL.png" alt="Settlement"/>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide big">
          <h2>Why aren't the traveler's airline ticket, baggage fee and in-flight Wi-Fi connected?
          </h2>
          <Todaytomorrow today={<div> As we mentioned in the “Shop” and “Offer” sections,
            legacy technology limits what can be considered a “ticket,
            ” while airline products have since evolved to become more customizable.Systematically,
            the traveler 's baggage fee is treated like a separate ticket, otherwise known as an electronic miscellaneous document (EMD).</div>} tomorrow={<div> NDC presents a big step toward an environment where a traveler can customize their air travel purchases.Farther in the future,
            ONE Order will create an even more seamless environment.E - commerce platforms have furthered the concept of < strong > a single,
            unified order</strong> that can contain a variety of different items.ONE Order will create a similar environment,
            wrapping disparate data together in one centralized,
            manageable place — reflecting any updates or status changes that may arise.This could include multiple travelers and numerous products beyond air.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How do
            <br/>&mdash; travel agencies &mdash;<br/>
            receive commission?
          </h2>
          <Todaytomorrow today={<div> Commissions are applied manually by the travel agency at time of purchase.To determine the accurate commission amount,
            agents either use GDS auto - pricing,
            or they have to decipher confusing(and sometimes conflicting)fare rules.If the agency charges an incorrect commission amount,
            they will later receive a debit memo from the airline.</div>} tomorrow={<div> < strong > Smart contracts</strong> will integrate contract terms in the purchase process,
            up front,
            increasing accuracy and reducing room for error(and potentially eliminating debit memos).The industry will throw a huge party celebrating the elimination of debit memos and all the resources spent managing them.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>Why can't the traveler pay with a combination of airline miles and credit card through their travel agency?
          </h2>
          <Todaytomorrow today={<div> Travelers don 't have access to the same form-of-payment options in every sales channel. When booking through a travel agency, they can only use cash or credit card form of payment (and not a combination, unless the agency is able to facilitate this on their end).  </div>} tomorrow={<div> < strong > Multiple forms of payment</strong> will be available in every sales channel.The customer can use a combination of airline miles,
            credit cards,
            cash,
            mobile wallet or alternative forms of payment in a single order.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide big">
          <h2>Could emerging technologies, such as blockchain, streamline the payment, settlement and reporting process?
          </h2>
          <Todaytomorrow today={<div> Entities throughout the industry are closely connected through a variety of technology platforms,
            critical file exchanges and detailed processes that take place every second,
            at a massive scale.The global travel community recognizes a need to transform its technology infrastructure to create a more flexible future — but this evolution takes some time,
            and it requires close collaboration with industry partners.</div>} tomorrow={<div> ARC and its industry partners are researching and piloting < strong > emerging technology</strong>,
            such as blockchain,
            to determine how it could transform today 's industry processes. ARC is working closely with United Airlines to determine whether blockchain technology could create increased transparency and efficiency in corporate travel. ARC has also invested in travel blockchain developer Blockskye, signaling its commitment to creating innovative solutions that move the industry forward. </div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="blueSlide">
          <h2>Long story short, the travel industry needs to transform its data and technology capabilities.
          </h2>
          <div className="blueContainer">
            Here are some critical considerations for the global air travel community.
            <button onClick={this.showDrawerBlue}>Tap to View</button>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <h2>Now that the traveler has purchased their tickets, we enter a glorious window of opportunity.
          </h2>
          <Link to={{
              pathname: '/',
              anchor: 'pretrip'
            }}>
            <button className="animated pulse slower infinite">Next Step: Pre-trip</button>
          </Link>
        </div>
      </Pageslide>
      <Drawer className="purchaseDrawer" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}
          <img className="closeIcon" onClick={this.onClose} src="img/closeIcon.png" alt="Close"/>
        </div>
      </Drawer>

      <Drawer className="blueDrawer" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visibleBlue}>
        <div className="infoDrawer">
          <h2>Here are some critical considerations for the global air travel community:</h2>

          <p><strong>Updated technology infrastructure</strong><br/>Modernize technology platforms industrywide and phase out inefficient, limiting, legacy systems.</p>
          <p><strong>Enhanced payment platforms</strong><br/>Align buying travel with other retail experiences.</p>
          <p><strong>Updated technology infrastructure</strong><br/>Modernize technology platforms industrywide and phase out inefficient, limiting, legacy systems.</p>
          <p><strong>Real-time data</strong><br/>Data needs to flow between parties in real time, including status updates and order changes. </p>
          <p><strong>Order structure</strong><br/>ONE Order will completely transform the structure of today’s airline ticket. </p>
          <p><strong>Hybrid environment</strong><br/>Organizations throughout the industry will move forward at different paces. Technology and data systems need to be in place to accommodate a wide range of capabilities, translating among many versions to ensure seamless communication at scale.</p>
          <p>ARC is actively addressing the following concerns to help airlines, travel agencies and technology companies navigate an increasingly complex landscape.</p>
          <img className="closeIcon" onClick={this.onClose} src="img/closeIcon.png" alt="Close"/>
        </div>
      </Drawer>

    </div>);
  }
}

export default Purchase;
