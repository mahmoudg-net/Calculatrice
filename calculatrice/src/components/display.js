import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Presentation(props) {
  console.log(props);
  const { left, right, lastOperator, operator, appendToLeft } = { ...props };
  return (
    <div id="displayContainer">
      <div id="display">{appendToLeft ? left : right}</div>
      <div>left : {left}</div>
      <div>operator: {operator}</div>
      <div>lastOperator: {lastOperator}</div>
      <div>appendToLeft: {appendToLeft.toString()}</div>
      <div>right: {right}</div>
    </div>
  );
}

Presentation.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  lastOperator: PropTypes.string,
  operator: PropTypes.string,
  appendToLeft: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const Display = connect(mapStateToProps, null)(Presentation);
export default Display;
