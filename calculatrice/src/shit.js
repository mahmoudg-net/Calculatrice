import React from "react";
import Display from "./components/display";
import { connect, Provider } from "react-redux";
import store from "./redux/store";

export function Shit(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> {props.left}</h1>
      <button onClick={props.increment}>increment</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { left: state.left, appendToLeft: state.appendToLeft };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
  };
};
export const ConnectedShit = connect(mapStateToProps, mapDispatchToProps)(Shit);

export const ShitApp = () => {
  return (
    <Provider store={store}>
      <ConnectedShit />
      <Display />
    </Provider>
  );
};
