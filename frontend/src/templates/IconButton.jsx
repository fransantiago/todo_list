import React from "react";

export default props => {
  return (
    !props.hide && (
      <button className={`btn btn-${props.btnStyle} ${props.otherClasses || ""}`} onClick={props.onClick}>
        <i className={`fa fa-${props.fontAwesomeIcon}`}></i>
      </button>
    )
  );
};
