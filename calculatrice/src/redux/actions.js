export const INPUT = "INPUT";
export const OPERATOR = "OPERATOR";

export const Input = (newChar) => {
  return {
    type: INPUT,
    payload: {
      appendToLeft: true, //append to left or to right
      newChar,
    },
  };
};

export const Operator = (ope) => {
  return {
    type: OPERATOR,
    payload: ope,
  };
};

export const AllOperators = {
  "+": { func: (a, b) => Number(a) + Number(b), id: "add" },
  "-": { func: (a, b) => Number(a) - Number(b), id: "subtract" },
  "*": { func: (a, b) => Number(a) * Number(b), id: "multiply" },
  "/": { func: (a, b) => Number(a) / Number(b), id: "divide" },
  "=": { func: (a) => a, id: "equals" },
};
