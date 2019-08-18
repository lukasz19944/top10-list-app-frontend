import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const { item } = this.props;
    const { index } = this.props;
    return (
      <div className="container">
        <div className="card card-body mb-3 bg-light p-0">
          <div className="row">
            <div className="col-1 rounded-left p-3 item-number">
              <h2>{index}.</h2>
            </div>
            <div className="col-11 rounded-right item-content">
              <div className="row p-1 pl-3 mb-1">
                <h3>{item.itemName}</h3>
              </div>
              <div className="row p-1 pl-3 mb-1">{item.itemDescription}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
