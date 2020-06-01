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
  "+": (a, b) => Number(a) + Number(b),
  "-": (a, b) => Number(a) - Number(b),
  "*": (a, b) => Number(a) * Number(b),
  "/": (a, b) => Number(a) / Number(b),
};
