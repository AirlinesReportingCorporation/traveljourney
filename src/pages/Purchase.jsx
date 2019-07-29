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
    this.state = {};
  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
  }

  render() {

    return (<div className="purchasePage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="quoteSlide">
          <div className="quotePhoto">
            <img src="img/lauriQuote.png" alt="Lauri Reishus"/>
          </div>
          <div className="quoteText">
            "Purchasing an airline ticket is simple and nearly instantaneous."
            <br/>
            <div className="quoteMetaSeperate">&mdash; The Traveler</div>
            <br/>
            "LOL"
            <br/>
            <div className="quoteMetaSeperate">&mdash; The Travel Industry</div>
            <br/>
            <div className="quoteNew">When you buy an airline ticket from a travel agency or TMC, a series of complex, behind-the-scenes processes begins.</div>
          </div>
        </div>

      </Pageslide>
      <Pageslide>
        <div className="customPurchaseSlide">
          <div className="customPurchaseSlideSub">Behind the Scenes:</div>
          <h1>How the Air<br/> Travel Purchase <br/>Works</h1>
          <p>The purchase is complex, with order <br/>creation, payment and settlement <br/>each necessitating a set of processes <br/>across parties</p>
          <div className="stepOrderContainer">
            <div className="stepOrder">
              Step 1: <strong>Order Creation</strong>
            </div>
            <div className="stepOrder">
              Step 2: <strong>Payment</strong>
            </div>
            <div className="stepOrder">
              Step 3: <strong>Settlement</strong>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide big">
          <h2>Why aren't the traveler's airline ticket, baggage fee and in-flight Wi-Fi connected?
          </h2>
          <Todaytomorrow today={<div> As we mentioned in the “Shop” and “Offer” sections, legacy technology limits what can be considered a “ticket,” while airline products have since evolved to become more customizable. Systematically, the traveler's baggage fee is treated like a separate ticket, otherwise known as an electronic miscellaneous document (EMD).</div>} tomorrow={<div> NDC presents a big step toward an environment where a traveler can customize their air travel purchases. Farther in the future, ONE Order will create an even more seamless environment. E-commerce platforms have furthered the concept of <strong>a single, unified order</strong> that can contain a variety of different items. ONE Order will create a similar environment, wrapping disparate data together in one centralized, manageable place — reflecting any updates or status changes that may arise. This could include multiple travelers and numerous products beyond air. </div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How do <br/>&mdash; travel agencies &mdash;<br/> receive commission?
          </h2>
          <Todaytomorrow today={<div> Commissions are applied manually by the travel agency at time of purchase. To determine the accurate commission amount, agents either use GDS auto-pricing, or they have to decipher confusing (and sometimes conflicting) fare rules. If the agency charges an incorrect commission amount, they will later receive a debit memo from the airline. </div>}  tomorrow={<div> <strong>Smart contracts</strong> will integrate contract terms in the purchase process, up front, increasing accuracy and reducing room for error (and potentially eliminating debit memos). The industry will throw a huge party celebrating the elimination of debit memos and all the resources spent managing them.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>Why can't the traveler pay with a combination of airline miles and credit card through their travel agency?
          </h2>
          <Todaytomorrow today={<div> Travelers don't have access to the same form-of-payment options in every sales channel. When booking through a travel agency, they can only use cash or credit card form of payment (and not a combination, unless the agency is able to facilitate this on their end).  </div>} tomorrow={<div> <strong>Multiple forms of payment</strong> will be available in every sales channel. The customer can use a combination of airline miles, credit cards, cash, mobile wallet or alternative forms of payment in a single order.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide big">
          <h2>Could emerging technologies, such as blockchain, streamline the payment, settlement and reporting process?
          </h2>
          <Todaytomorrow today={<div> Entities throughout the industry are closely connected through a variety of technology platforms, critical file exchanges and detailed processes that take place every second, at a massive scale. The global travel community recognizes a need to transform its technology infrastructure to create a more flexible future — but this evolution takes some time, and it requires close collaboration with industry partners. </div>} tomorrow={<div> ARC and its industry partners are researching and piloting <strong>emerging technology</strong>, such as blockchain, to determine how it could transform today's industry processes. ARC is working closely with United Airlines to determine whether blockchain technology could create increased transparency and efficiency in corporate travel. ARC has also invested in travel blockchain developer Blockskye, signaling its commitment to creating innovative solutions that move the industry forward. </div>}></Todaytomorrow>
        </div>
      </Pageslide>
    </div>);
  }
}

export default Purchase;
