import {
  INPUT,
  APPEND_OPERATOR,
  COMPUTE,
  CLEAR,
  AllOperators,
} from "./actions";

export const initialState = {
  left: "",
  right: "",
  operator: "",
  lastOperator: "",
  appendToLeft: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      const ass = Object.assign(
        {},
        state,
        appendInput(state.left, state.right, state.appendToLeft, action.payload)
      );
      return ass;
    case APPEND_OPERATOR:
      const returned = appendOperator(
        state.left,
        action.payload,
        state.operator,
        state.right
      );
      return { ...state, ...{ lastOperator: state.operator }, ...returned };
    case COMPUTE:
      return Object.assign(
        {},
        state,
        { operator: action.payload ?? "" },
        makeComputation(state.left, state.right, state.operator)
      );
    case CLEAR:
      return Object.assign(initialState, { left: "0" });
    default:
      return state;
  }
};

const maxInput = 20;
const appendInput = (left, right, appendToLeft, newChar) => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let input = appendToLeft ? left : right;
  if (numbers.includes(newChar)) {
    if (input === "" || input === "0") {
      input = newChar !== "0" ? newChar : "0";
    } else {
      input = input.length < maxInput ? `${input}${newChar}` : input;
    }
  }
  if (newChar === ".") {
    input = input.indexOf(".") >= 0 ? input : input + ".";
  }
  if (appendToLeft) {
    return { left: input };
  } else {
    return { right: input };
  }
};

const appendOperator = (left, actionOperator, stateOperator, right) => {
  if (actionOperator === "-" && stateOperator !== "") {
    return {
      left: left === "" ? "0" : left,
      operator: stateOperator,
      appendToLeft: false,
      right: "-",
    };
  }
  if (actionOperator !== "" && right === "-") {
    return {
      left: left === "" ? "0" : left,
      operator: actionOperator,
      right: "",
      appendToLeft: false,
      lastOperator: "-",
    };
  }
  return {
    left: left === "" ? "0" : left,
    operator: actionOperator,
    appendToLeft: false,
  };
};

const makeComputation = (left, right, stateOperator) => {
  if (stateOperator != "") {
    return {
      left: AllOperators[stateOperator].func(left, right).toString(),
      right: "",
      lastOperator: stateOperator,
    };
  }
};

export default reducer;
