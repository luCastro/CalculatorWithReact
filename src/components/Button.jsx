import React from "react";
import "./Button.css";

export default (props) => {
  let styleClasses = "button ";
  styleClasses += props.operation ? "operation" : "";
  styleClasses += props.double ? "double" : "";
  styleClasses += props.triple ? "triple" : "";
  

  return <button
   onClick={e => props.click && props.click(props.label)}
  className={styleClasses}>{props.label}</button>;
};
