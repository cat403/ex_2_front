const reducer = (state = {}, action) => {
  switch (action.type) {
    case "CONSOLE":
      console.log("in reducer", action.payload);
      return state;
    case "TRYPOST":
      return { ...action.payload, canYouSeeMe: action.payload.firstName };
    case "REGISTER":
      return {
        sucess: action.payload.success,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};

export default reducer;
