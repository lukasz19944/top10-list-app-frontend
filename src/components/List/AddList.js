import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createList } from "../../actions/listActions";
import ItemInput from "../Layout/ItemInput";
import classnames from "classnames";

class AddList extends Component {
  constructor() {
    super();

    this.state = {
      listName: "",
      listDescription: "",
      listCategory: "",

      itemName1: "",
      itemDesc1: "",
      itemName2: "",
      itemDesc2: "",
      itemName3: "",
      itemDesc3: "",
      itemName4: "",
      itemDesc4: "",
      itemName5: "",
      itemDesc5: "",
      itemName6: "",
      itemDesc6: "",
      itemName7: "",
      itemDesc7: "",
      itemName8: "",
      itemDesc8: "",
      itemName9: "",
      itemDesc9: "",
      itemName10: "",
      itemDesc10: "",

      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let newItems = [];

    newItems.push({
      itemName: this.state.itemName1,
      itemDescription: this.state.itemDesc1
    });
    newItems.push({
      itemName: this.state.itemName2,
      itemDescription: this.state.itemDesc2
    });
    newItems.push({
      itemName: this.state.itemName3,
      itemDescription: this.state.itemDesc3
    });
    newItems.push({
      itemName: this.state.itemName4,
      itemDescription: this.state.itemDesc4
    });
    newItems.push({
      itemName: this.state.itemName5,
      itemDescription: this.state.itemDesc5
    });
    newItems.push({
      itemName: this.state.itemName6,
      itemDescription: this.state.itemDesc6
    });
    newItems.push({
      itemName: this.state.itemName7,
      itemDescription: this.state.itemDesc7
    });
    newItems.push({
      itemName: this.state.itemName8,
      itemDescription: this.state.itemDesc8
    });
    newItems.push({
      itemName: this.state.itemName9,
      itemDescription: this.state.itemDesc9
    });
    newItems.push({
      itemName: this.state.itemName10,
      itemDescription: this.state.itemDesc10
    });

    const newList = {
      listName: this.state.listName,
      listDescription: this.state.listDescription,
      listCategory: this.state.listCategory,
      items: newItems
    };

    this.props.createList(newList, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create New List</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.listName
                    })}
                    placeholder="List Name"
                    name="listName"
                    value={this.state.listName}
                    onChange={this.onChange}
                  />
                  {errors.listName && (
                    <div className="invalid-feedback">{errors.listName}</div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.listDescription
                    })}
                    placeholder="List Description"
                    name="listDescription"
                    value={this.state.listDescription}
                    onChange={this.onChange}
                  />
                  {errors.listDescription && (
                    <div className="invalid-feedback">
                      {errors.listDescription}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.listCategory
                    })}
                    placeholder="List Category"
                    name="listCategory"
                    value={this.state.listCategory}
                    onChange={this.onChange}
                  />
                  {errors.listCategory && (
                    <div className="invalid-feedback">
                      {errors.listCategory}
                    </div>
                  )}
                </div>

                <hr />

                <ItemInput
                  inputText={"1"}
                  itemNameValue={this.state.itemName1}
                  itemNameName={"itemName1"}
                  itemDescValue={this.state.itemDesc1}
                  itemDescName={"itemDesc1"}
                  onChange={this.onChange}
                  errorName={errors.items0itemName}
                  errorDesc={errors.items0itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"2"}
                  itemNameValue={this.state.itemName2}
                  itemNameName={"itemName2"}
                  itemDescValue={this.state.itemDesc2}
                  itemDescName={"itemDesc2"}
                  onChange={this.onChange}
                  errorName={errors.items1itemName}
                  errorDesc={errors.items1itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"3"}
                  itemNameValue={this.state.itemName3}
                  itemNameName={"itemName3"}
                  itemDescValue={this.state.itemDesc3}
                  itemDescName={"itemDesc3"}
                  onChange={this.onChange}
                  errorName={errors.items2itemName}
                  errorDesc={errors.items2itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"4"}
                  itemNameValue={this.state.itemName4}
                  itemNameName={"itemName4"}
                  itemDescValue={this.state.itemDesc4}
                  itemDescName={"itemDesc4"}
                  onChange={this.onChange}
                  errorName={errors.items3itemName}
                  errorDesc={errors.items3itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"5"}
                  itemNameValue={this.state.itemName5}
                  itemNameName={"itemName5"}
                  itemDescValue={this.state.itemDesc5}
                  itemDescName={"itemDesc5"}
                  onChange={this.onChange}
                  errorName={errors.items4itemName}
                  errorDesc={errors.items4itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"6"}
                  itemNameValue={this.state.itemName6}
                  itemNameName={"itemName6"}
                  itemDescValue={this.state.itemDesc6}
                  itemDescName={"itemDesc6"}
                  onChange={this.onChange}
                  errorName={errors.items5itemName}
                  errorDesc={errors.items5itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"7"}
                  itemNameValue={this.state.itemName7}
                  itemNameName={"itemName7"}
                  itemDescValue={this.state.itemDesc7}
                  itemDescName={"itemDesc7"}
                  onChange={this.onChange}
                  errorName={errors.items6itemName}
                  errorDesc={errors.items6itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"8"}
                  itemNameValue={this.state.itemName8}
                  itemNameName={"itemName8"}
                  itemDescValue={this.state.itemDesc8}
                  itemDescName={"itemDesc8"}
                  onChange={this.onChange}
                  errorName={errors.items7itemName}
                  errorDesc={errors.items7itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"9"}
                  itemNameValue={this.state.itemName9}
                  itemNameName={"itemName9"}
                  itemDescValue={this.state.itemDesc9}
                  itemDescName={"itemDesc9"}
                  onChange={this.onChange}
                  errorName={errors.items8itemName}
                  errorDesc={errors.items8itemDescription}
                />
                <hr />
                <ItemInput
                  inputText={"10"}
                  itemNameValue={this.state.itemName10}
                  itemNameName={"itemName10"}
                  itemDescValue={this.state.itemDesc10}
                  itemDescName={"itemDesc10"}
                  onChange={this.onChange}
                  errorName={errors.items9itemName}
                  errorDesc={errors.items9itemDescription}
                />
                <hr />

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddList.propTypes = {
  createList: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.error
});

export default connect(
  mapStateToProps,
  { createList }
)(AddList);
