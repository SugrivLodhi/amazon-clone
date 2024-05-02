import { combineReducers } from "redux";
import { reducer } from "./Reducer";

const rootReducer = combineReducers({
  data: reducer,
});
export default rootReducer;
