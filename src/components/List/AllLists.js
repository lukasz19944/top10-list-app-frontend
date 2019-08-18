import React, { Component } from "react";
import { connect } from "react-redux";
import { getLists } from "../../actions/listActions";
import PropTypes from "prop-types";
import List from "./List";

class AllLists extends Component {
  componentDidMount() {
    this.props.getLists();
  }

  render() {
    const { lists } = this.props.list;

    return (
      <div className="lists">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">All Lists</h1>
              <br />

              <hr />

              {lists.map(list => (
                <List key={list.id} list={list} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AllLists.propTypes = {
  list: PropTypes.object.isRequired,
  getLists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.list
});

export default connect(
  mapStateToProps,
  { getLists }
)(AllLists);
