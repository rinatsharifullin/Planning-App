const reducer = (state = "", action) => {
  switch (action.type) {
    case "TEXT_VALUE": {
      return { state, value: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
