import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Operator } from "../redux/actions";

function Presentation(props) {
  const { id, operator, handleClick } = { ...props };

  return (
    <button id={id} onClick={() => handleClick(operator)}>
      {operator}
    </button>
  );
}

Presentation.propTypes = {
  id: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (operator) => {
      dispatch(Operator(operator));
    },
  };
};

const CalculationButton = connect(null, mapDispatchToProps)(Presentation);
export default CalculationButton;
