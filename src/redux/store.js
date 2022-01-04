import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const configureStore = (initialState = { error: null }) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

export default configureStore;
