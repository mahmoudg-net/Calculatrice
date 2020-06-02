import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Display from "./components/display";
import InputButton from "./components/inputButton";
import { AllOperators } from "./redux/actions";
import "./App.css";
import CalculationButton from "./components/calculatorButton";

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
    <Provider store={store}>
      <div className="App">
        <Display />
        {numbers.map((n) => {
          const k = Object.keys(n)[0];
          return <InputButton key={n[k]} char={k} id={n[k]} />;
        })}
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
      </div>
    </Provider>
  );
}

export default App;
