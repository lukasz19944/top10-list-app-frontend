import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../resources/img.png";
import "./List.css";

class List extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row mb-3">
            <div className="col-2">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <div className="row">
                <h3 className="display-6">{list.listName}</h3>
              </div>
              <div className="row">
                <p>{list.listDescription}</p>
              </div>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <li className="list-group-item text-left item-first">
                  <strong>1. </strong> {list.items[0].itemName}
                </li>
                <li className="list-group-item text-left item-second">
                  <strong>2. </strong> {list.items[1].itemName}
                </li>
                <li className="list-group-item text-left item-third">
                  <strong>3. </strong> {list.items[2].itemName}
                </li>
                <Link
                  to={`/allLists/${list.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <li className="list-group-item item-more">More</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-left">
              <span className="display-6">{list.listCategory}</span>
            </div>
            <div className="col-2 text-right">
              <span className="display-6">{list.publishDate}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
