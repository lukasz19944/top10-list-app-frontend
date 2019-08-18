import { combineReducers } from "redux";
import listReducer from "./listReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  list: listReducer,
  error: errorReducer
});
