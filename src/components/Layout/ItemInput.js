import React from "react";
import classnames from "classnames";

const itemInput = props => {
  return (
    <React.Fragment>
      <div className="input-group">
        <div
          className={classnames("input-group-prepend", {
            "bg-danger": props.errorName
          })}
          style={{ width: "5%" }}
        >
          <span className="input-group-text w-100 font-weight-bold">
            {props.inputText}
          </span>
        </div>
        <input
          type="text"
          className={classnames("form-control form-control-lg", {
            "is-invalid": props.errorName
          })}
          placeholder="Item Name"
          name={props.itemNameName}
          value={props.itemNameValue}
          onChange={props.onChange}
        />
      </div>
      <div className="input-group">
        <div
          className={classnames("input-group-prepend", {
            "bg-danger": props.errorDesc
          })}
          style={{ width: "5%" }}
        >
          <span className="input-group-text w-100" />
        </div>
        <textarea
          className={classnames("form-control form-control-lg", {
            "is-invalid": props.errorDesc
          })}
          placeholder="Item Description"
          name={props.itemDescName}
          value={props.itemDescValue}
          onChange={props.onChange}
        />
      </div>
    </React.Fragment>
  );
};

export default itemInput;
