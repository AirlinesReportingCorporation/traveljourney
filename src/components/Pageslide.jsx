import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Pageslide.scss';

class Pageslide extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return <div className="pageSlide">
      {this.props.children}
    </div>;
  }
}

export default Pageslide;
