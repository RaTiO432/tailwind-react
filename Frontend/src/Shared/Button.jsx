import React from "react";

const Button = (props) => {
  const className = "btn btn-outline " + props.className;
  return (
    <div>
      <button className={className} onClick={props.onClick}>
        {props.buttonname}
      </button>
    </div>
  );
};

export default Button;