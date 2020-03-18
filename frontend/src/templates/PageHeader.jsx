import React from "react";

export default props => (
  <div className="pb-2 mt-4 mb-2 border-bottom">
    <h1>
      {props.name} <small className="text-secondary">{props.small}</small>
    </h1>
  </div>
);
