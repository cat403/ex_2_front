const reducer = (state = {}, action) => {
  switch (action.type) {
    case "CONSOLE":
      console.log("in reducer", action.payload);
      return state;
    case "TRYPOST":
      return { ...action.payload, canYouSeeMe: action.payload.firstName };
    case "SIGNIN":
      return { ...state, ...action.payload };
    case "LOG_OUT":
      return (state = {});
    case "REGISTER":
      return {
        ...state,
        ...action.payload,
      };
    case "GET_USER":
      return { ...state, user: { ...action.payload } };
    case "CHECK_DB_AVAILABILITY":
      return { ...state, available: action.payload.available };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    case "LOG_NUTRITION":
      return { ...state, ...action.payload };
    case "GET_DAILY_NUTRITION":
      return {
        ...state,
        meals: [...action.payload.meals],
        totalCalories: action.payload.totalCalories,
      };
    case "SET_USERID":
      return { ...state, userId: action.payload };
    case "DELETE_MEAL":
      return { ...state, ...action.payload };
    case "LOG_EXERCISE":
      return { ...state, ...action.payload };
    case "LOG_CALORIES":
      return { ...state, ...action.payload };
    case "DELETE_EXERCISE":
      return { ...state, ...action.payload };
    case "GET_EXERCISES":
      return { ...state, ...action.payload };
    case "GET_CALORIES":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reducer;
