import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Presentation(props) {
  const { left, right, lastOperator, operator, appendToLeft } = { ...props };
  return (
    <div id="displayContainer">
      <div id="encours">
        {left !== "" && operator !== "" ? `${left} ${operator}` : " "}
      </div>
      <div id="display">{appendToLeft || right === "" ? left : right}</div>
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
