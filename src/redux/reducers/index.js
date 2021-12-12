const reducer = (
  state = { userName: "mike", error: "hi", userId: "w" },
  action
) => {
  switch (action.type) {
    case "CONSOLE":
      console.log("in reducer", action.payload);
      return state;
    case "TRYPOST":
      return { ...action.payload, canYouSeeMe: action.payload.firstName };
    case "REGISTER":
      window.console.log(action.payload);
      //   return {
      //     error: action.payload.error,
      //     userName: action.payload.userName,
      //     userId: action.payload._id,
      //   };
      return state;
    default:
      return state;
  }
};

export default reducer;
