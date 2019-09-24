import React from "react";

const Controller = ({ iconName, className, ...rest }) => {
  return (
    <button className={`controller ${className}`} {...rest}>
      <i className={`fas fa-${iconName}`} />
    </button>
  );
};

export default Controller;
