import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import ReactDOM from "react-dom";

class Customlink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.scrollTo(0, 0);
    setTimeout(function(){}, 1000);
    this.props.history.push(this.props.to);
  }

  render() {
    return <a onClick={this.handleClick}>{this.props.children}</a>;
  }
}

export default withRouter(Customlink);
