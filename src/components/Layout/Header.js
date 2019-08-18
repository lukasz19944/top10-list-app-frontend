import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Top10 Lists
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  ALL LISTS
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3" style={{ marginTop: "4.5px" }}>
                <Link
                  to="#"
                  className="btn btn-sm btn-outline-dark font-weight-bold"
                >
                  ADD NEW
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="fas fa-user-circle mr-1" />
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
