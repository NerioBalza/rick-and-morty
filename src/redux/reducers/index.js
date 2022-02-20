const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SOMETHING":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
