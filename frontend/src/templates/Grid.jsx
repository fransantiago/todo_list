import React from "react";

export default props => {
  const convertToBootstrapGridClasses = numbersInAString => {
    const cols = numbersInAString ? numbersInAString.split(" ") : [];
    if (!cols.length) return "";

    let classes = `col-${cols[0]}`;

    if (cols[1]) classes += ` col-sm-${cols[1]}`;
    if (cols[2]) classes += ` col-md-${cols[2]}`;
    if (cols[3]) classes += ` col-ls-${cols[3]}`;

    return classes;
  };

  const bootstrapGridClasses = convertToBootstrapGridClasses(props.cols || "12");

  return <div className={bootstrapGridClasses + ` ${props.otherClasses}`}>{props.children}</div>;
};
