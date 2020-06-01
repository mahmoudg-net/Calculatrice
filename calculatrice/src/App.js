import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Display from "./components/display";
import InputButton from "./components/inputButton";
import { AllOperators } from "./redux/actions";
import "./App.css";
import CalculationButton from "./components/calculatorButton";

function App() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i.toString());
  }
  numbers.push(".");
  const operators = Object.keys(AllOperators);
  operators.push("=");
  return (
    <Provider store={store}>
      <div className="App">
        <Display />
        {numbers.map((n) => {
          return <InputButton key={n} char={n} />;
        })}
        <div style={{ display: "block" }}>
          {operators.map((o) => {
            return <CalculationButton key={o} operator={o} />;
          })}
        </div>
      </div>
    </Provider>
  );
}

export default App;
