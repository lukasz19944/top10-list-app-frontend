import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getList } from "../../actions/listActions";
import "./ListDetails.css";
import img from "../../resources/img.png";
import Items from "../Item/Items";

class ListDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getList(id, this.props.history);
  }

  render() {
    const { list } = this.props.list;

    let items = null;

    if (list.items || list.items !== undefined) {
      items = <Items items={list.items} />;
    }

    return (
      <div>
        <div className="container">
          <div className="card card-body mb-3 list-info">
            <div className="row mb-3">
              <div className="col-2">
                <img src={img} alt="" className="img-fluid" />
              </div>
              <div className="col-7">
                <div className="row">
                  <h3 className="display-6">{list.listName}</h3>
                </div>
                <div className="row">
                  <p>{list.listDescription}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 text-left">
                <span className="display-6">{list.listCategory}</span>
              </div>
              <div className="col-4 text-right">
                <span className="display-6">Added by: test123</span>
              </div>
              <div className="col-2 text-right">
                <span className="display-6">{list.publishDate}</span>
              </div>
            </div>
          </div>
        </div>
        {items}
      </div>
    );
  }
}

ListDetails.propTypes = {
  list: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.list
});

export default connect(
  mapStateToProps,
  { getList }
)(ListDetails);
