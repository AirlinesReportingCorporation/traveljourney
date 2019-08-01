import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
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
        <div className="order">Perfect World</div>
        <p>In a perfect world, the trip goes smoothly and according to plan. The traveler arrives at their destination on time, with the products and services they purchased. In an evolved distribution environment, these steps will be even more intuitive and streamlined.
        </p>
        <div className="tableContainer">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Departure</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Flight Arrives</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>;

    } else if (drawerContent == "payment") {
      drawerContent = <div>
        <div className="payment">Delays & Missed Connections</div>
        <p>Flight delays happen, and they can create a cascading effect on the rest of a trip, especially if there's a connecting flight.</p>
        <div className="tableContainer tableLong">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Board First Flight</td>
                  <td><img src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>First Flight Departure</td>
                  <td><img className="animated infinite pulse slow" src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>First Flight Arrives</td>
                  <td><img src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>Missed Connection</td>
                  <td><img src="img/X.png"/></td>
                </tr>
                <tr>
                  <td>Rebook</td>
                  <td><img src="img/warning.png"/></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Board New Flight</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>New Flight Departs</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>New Flight Arrives</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td><img src="img/checkmark.png"/></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    } else if (drawerContent == "settlement") {
      drawerContent = <div>
        <div className="payment">Bundles & Corporate Policy</div>
        <p className="bundlesP">Purchasing bundles ahead of time can reduce friction on the day of travel. Corporate travel programs can reduce friction by creating flexible travel policies for frequent travelers. Amenities like in-flight wi-fi and TSA PreCheck can create a more seamless and more productive experience for business travelers.</p>
        <div className="tableContainer tableBundles">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Economy Plus</td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-arranged</td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-arranged</td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>TSA PreCheck</td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-arranged</td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Priority Boarding</td>
                </tr>
                <tr>
                  <td>Departure</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-purchase</td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-purchase</td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Flight Arrives</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img src="img/checkmark.png"/></td>
                  <td>Pre-arranged</td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>;
    }

    return (<div className="tripPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Pageslide>
        <div className="textSlide GradientGreen">

          <div className="textSlideContent">
            The trip experience begins with mobile check-in 24 hours in advance and spans the traveler’s journey to and through the airport, as well as boarding, flight and transport to their destination.

          </div>
          <img src="img/allcopyTrip.png" alt=""/>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What if the traveler needs to make a last-minute change to their trip?</h2>
          <Todaytomorrow today={<div> Air travel is becoming more streamlined,
            but it is still fragmented in many ways.The customer expects an easy,
            seamless and customizable buying experience — yet making changes to a ticket can be challenging,
            and add - on purchases(checked bag, wi - fi, in - flight meal)are each made on a separate transaction.</div>} tomorrow={<div> Because personalized products have already been purchased at the point of sale,
            the traveler can enjoy a < strong > frictionless experience</strong>,
            which has been customized to their personal preferences.In a ONE Order environment,
            ancillary purchases will be connected to the traveler’s order,
            so all their data will be centralized in one location.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="customTripSlide">
          <h1>The Day of Travel</h1>
          <p>With dozens of touch points on the day of travel, brands have an opportunity to create a more seamless experience for their travelers.</p>
          <div className="stepOrderContainer">
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'order')}>
              <strong>In a Perfect World</strong>
            </div>
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'payment')}>
              <strong>Delays & Missed Connections</strong>
            </div>
            <div className="stepOrder" onClick={this.showDrawer.bind(this, 'settlement')}>
              <strong>Bundles & Corporate Policy</strong>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide tts2 big">
          <h2>What happens if the flight is cancelled or delayed, and there’s a missed connection?
          </h2>
          <Todaytomorrow today={<div> In cases of irregular operations(such as inclement weather, delays and cancellations),
            a traveler’s options for changing their ticket vary depending on where they purchased their ticket.If they purchased through a travel agency or TMC, either that agency or the airline may make changes to the ticket.If they purchased through the airline, a travel agency or TMC is not able to service the ticket.</div>} tomorrow={<div><strong> Channel - agnostic service</strong> will enable TMCs to service all their clients’ airline tickets,
            regardless of the purchase channel.This will require efficient,
            real - time transmission of data.Opening up customer service opportunities to agencies in a channel - agnostic servicing environment alleviates strain for the airline, and it creates a more positive experience for the customer.Leveraging technologies like AI and mobile can also help speed resolution.</div>}></Todaytomorrow>
        </div>
      </Pageslide>

      <Pageslide>
        <div className="endSlide">
          <h2>Fast forward. The traveler has happily made it to their destination.
            <br/><br/>After enjoying their trip, the traveler ventures back home. (But the journey’s not over yet!)
          </h2>
          <Link to={{
              pathname: '/',
              anchor: 'outcome'
            }}>
            <button className="animated pulse slower infinite">Next Step: Outcome</button>
          </Link>
        </div>
      </Pageslide>
      <Drawer className="purchaseDrawer" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}
          <img className="closeIcon" onClick={this.onClose} src="img/closeIcon.png" alt="Close"/>
        </div>
      </Drawer>
    </div>);
  }
}

export default Trip;
