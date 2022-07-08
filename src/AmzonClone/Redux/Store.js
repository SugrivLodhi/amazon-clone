import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./Root-Reducer";
const composeInhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeInhencer(applyMiddleware(ReduxThunk))
);
export default store;
