import { combineReducers } from "redux";
import logReducer from "./logReducer.js";
import techReducer from "./techReducer.js";
//combine the reducers and pass it to the store
export default combineReducers({
  //this parent state log will contain the children states(logs, current, loading, error)which are in the reducer
  log: logReducer,
  tech: techReducer,
});
