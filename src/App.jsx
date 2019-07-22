import React, {Component} from "react";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {version, Button, Drawer} from "antd";
import {AnimatedSwitch} from 'react-router-transition';
import {Motion, spring} from 'react-motion';
import {hot} from 'react-hot-loader';
import Samplepage from './pages/Samplepage.jsx';
import Startpage from './pages/Startpage.jsx';
import Slidenav from './components/Slidenav.jsx';

//navigation
import Navigation from './pages/Navigation.jsx';

//pages
import Inspire from './pages/Inspire.jsx';
import Shop from './pages/Shop.jsx';
import Offer from './pages/Offer.jsx';
import Purchase from './pages/Purchase.jsx';
import Pretrip from './pages/Pretrip.jsx';
import Trip from './pages/Trip.jsx';
import Outcome from './pages/Outcome.jsx';

function glide(val) {
  return val;
}

const pageTransitions = {
  atEnter: {
    offset: 200,
    opacity: 0
  },
  atLeave: {
    offset: glide(-100),
    opacity: glide(0)
  },
  atActive: {
    offset: glide(0),
    opacity: glide(1)
  }
};

class App extends Component {

  render() {
    return (<div>
      <Router>
        <div>
          <AnimatedSwitch {...pageTransitions} mapStyles={styles => ({transform: `translateX(${styles.offset}%)`})} className="switch-wrapper">
            <Route path="/" exact="exact" component={Navigation}/>
            <Route path="/navigation" exact="exact" component={Navigation}/>
            <Route path="/about/" component={Samplepage}/>
            <Route path="/inspire/" component={Inspire}/>
            <Route path="/shop/" component={Shop}/>
            <Route path="/offer/" component={Offer}/>
            <Route path="/purchase/" component={Purchase}/>
            <Route path="/pretrip/" component={Pretrip}/>
            <Route path="/trip/" component={Trip}/>
            <Route path="/outcome/" component={Outcome}/>
          </AnimatedSwitch>
          <Slidenav/>
        </div>

      </Router>

    </div>)
  }
}

export default hot(module)(App);
