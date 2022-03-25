const st = 0;

const changeNumber = (state = st, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.payload;
    case "Decrement":
      return state - action.payloads;
    default:
      return state;
  }
};

export default changeNumber;
