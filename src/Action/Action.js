export const incre = (num) => {
  return {
    type: "Increment",
    payload: num,
  };
};

export const decre = (num) => {
  return {
    type: "Decrement",
    payloads: num,
  };
};
