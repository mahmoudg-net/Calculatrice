import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AppendOperator, Compute } from "../redux/actions";

function Presentation(props) {
  const { id, operator, right, handleClick } = { ...props };

  return (
    <button
      id={id}
      onClick={() => handleClick(operator, right)}
      className="actionButton"
    >
      {operator}
    </button>
  );
}

Presentation.propTypes = {
  id: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  right: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    right: state.right,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (operator, right) => {
      if (right !== "" && right !== "-") {
        dispatch(Compute(operator));
      } else {
        dispatch(AppendOperator(operator));
      }
    },
  };
};

const CalculationButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentation);
export default CalculationButton;
