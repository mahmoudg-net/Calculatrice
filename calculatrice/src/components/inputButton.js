import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Input } from "../redux/actions";

function Presentation(props) {
  const { handleClick, id, char } = { ...props };
  console.log(props);
  return (
    <button id={id} onClick={() => handleClick(char)}>
      {char}
    </button>
  );
}

Presentation.propTypes = {
  id: PropTypes.string.isRequired,
  char: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (char) => dispatch(Input(char)),
  };
};

const InputButton = connect(null, mapDispatchToProps)(Presentation);
export default InputButton;
