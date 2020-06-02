import { INPUT, OPERATOR, CLEAR, AllOperators } from "./actions";

export const initialState = {
  left: "",
  right: "",
  lastOperator: "",
  appendToLeft: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      if (state.appendToLeft) {
        return {
          ...state,
          left: applyInput(state.left, action.payload.newChar),
        };
      } else {
        return {
          ...state,
          right: applyInput(state.right, action.payload.newChar),
        };
      }
    case OPERATOR:
      const ret = applyOperator(state, action.payload);
      console.log(ret);
      console.log({ ...state, ...ret });
      return { ...state, ...ret };
    case CLEAR:
      return Object.assign(initialState, { left: "0" });
    default:
      return state;
  }
};

const maxInput = 20;
const applyInput = (input = "", newChar = "") => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (numbers.includes(newChar)) {
    if (input === "" || input === "0") {
      return newChar !== "0" ? newChar : "0";
    }
    return input.length < maxInput ? `${input}${newChar}` : input;
  }
  if (newChar === ".") {
    return input.indexOf(".") >= 0 ? input : input + ".";
  }
  return input;
};

const applyOperator = (state, operator) => {
  const { left, right, lastOperator } = state;
  const operators = Object.keys(AllOperators);
  if (left === "" || left === "0") {
    return {
      left: "0",
      right: "",
      lastOperator: operator,
      appendToLeft: false,
    };
  }
  if (operators.includes(operator)) {
    if (lastOperator !== "") {
      return {
        left: AllOperators[lastOperator].func(left, right).toString(),
        lastOperator: operator,
        right: "",
        appendToLeft: false,
      };
    } else {
      return {
        left: state.left,
        lastOperator: operator,
        right: "",
        appendToLeft: false,
      };
    }
  }
  if (operator === "=") {
    if (lastOperator !== "") {
      return {
        left: AllOperators[lastOperator].func(left, right).toString(),
        lastOperator: "",
        right: "",
        appendToLeft: true,
      };
    } else {
      return {
        left: state.left,
        lastOperator: "",
        right: "",
        appendToLeft: true,
      };
    }
  }
};

export default reducer;
