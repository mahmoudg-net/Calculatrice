import React from "react";
import { connect } from "react-redux";
import { Clear, Compute } from "../redux/actions";

const CLEAR_BUTTON = "CLEAR_BUTTON";
const RESULT_BUTTON = "RESULT_BUTTON";

const ButtonsProperties = {
  CLEAR_BUTTON: {
    display: "AC",
    id: "clear",
    func: Clear,
  },
  RESULT_BUTTON: {
    display: "=",
    id: "equals",
    func: Compute,
  },
};

const CustomButtom = connect(null, (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(ButtonsProperties[ownProps.buttonType].func()),
  };
})((props) => {
  const { buttonType, handleClick } = { ...props };
  return (
    <button
      className="actionButton"
      id={ButtonsProperties[buttonType].id}
      onClick={() => handleClick()}
    >
      {ButtonsProperties[buttonType].display}
    </button>
  );
});

export function ActionButtons() {
  return (
    <React.Fragment>
      <CustomButtom buttonType={CLEAR_BUTTON} />
      <CustomButtom buttonType={RESULT_BUTTON} />
    </React.Fragment>
  );
}
