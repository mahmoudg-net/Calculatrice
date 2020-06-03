import React from "react";
import { connect } from "react-redux";
import Display from "./components/display";
import InputButton from "./components/inputButton";
import { AllOperators, Clear, Compute } from "./redux/actions";
import "./App.css";
import CalculationButton from "./components/calculationButton";

const CLEAR_BUTTON = "Clear";
const RESULT_BUTTON = "=";

const CustomButtom = connect(null, (dispatch) => {
  return {
    handleClick: (buttonType) =>
      buttonType === CLEAR_BUTTON ? dispatch(Clear()) : dispatch(Compute()),
  };
})((props) => {
  return (
    <button id="custom" onClick={() => props.handleClick(props.buttonType)}>
      {props.buttonType}
    </button>
  );
});

function App() {
  const numbers = [
    { "0": "zero" },
    { "1": "one" },
    { "2": "two" },
    { "3": "three" },
    { "4": "four" },
    { "5": "five" },
    { "6": "six" },
    { "7": "seven" },
    { "8": "eight" },
    { "9": "nine" },
    { ".": "decimal" },
  ];
  const operators = Object.keys(AllOperators);

  return (
    <div className="App">
      <Display />
      <div style={{ display: "block" }}>
        {numbers.map((n) => {
          const k = Object.keys(n)[0];
          return <InputButton key={n[k]} char={k} id={n[k]} />;
        })}
      </div>
      <div style={{ display: "block" }}>
        {operators.map((o) => {
          return (
            <CalculationButton
              key={AllOperators[o].id}
              operator={o}
              id={AllOperators[o].id}
            />
          );
        })}
      </div>
      <div style={{ display: "block" }}>
        <CustomButtom buttonType={RESULT_BUTTON} />
        <CustomButtom buttonType={CLEAR_BUTTON} />
      </div>
    </div>
  );
}

export default App;
