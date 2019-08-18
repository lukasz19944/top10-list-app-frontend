import React, { Component } from "react";
import Item from "./Item/Item";

class Items extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="items">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <hr />

              {items.map((item, index) => (
                <Item key={item.id} item={item} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
