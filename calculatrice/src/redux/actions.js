export const INPUT = "INPUT";
export const APPEND_OPERATOR = "APPEND_OPERATOR";
export const COMPUTE = "COMPUTE";
export const CLEAR = "CLEAR";

export const Input = (newChar) => {
  return {
    type: INPUT,
    payload: newChar,
  };
};

export const AppendOperator = (operator) => {
  return {
    type: APPEND_OPERATOR,
    payload: operator,
  };
};

export const Compute = (operator) => {
  return {
    type: COMPUTE,
    payload: operator,
  };
};

export const Clear = () => {
  return {
    type: CLEAR,
  };
};

export const AllOperators = {
  "+": {
    func: (a, b) => {
      return Number(a) + Number(b);
    },
    id: "add",
  },
  "-": {
    func: (a, b) => {
      return Number(a) - Number(b);
    },
    id: "subtract",
  },
  "*": {
    func: (a, b) => {
      return Number(a) * Number(b);
    },
    id: "multiply",
  },
  "/": {
    func: (a, b) => {
      return Number(a) / Number(b);
    },
    id: "divide",
  },
};
