import { auth } from "./Firebase";
import * as types from "./ActionType";
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (users) => ({
  type: types.REGISTER_SUCCESS,
  payload: users,
});

const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

const loginStart = () => ({
  type: types.REGISTER_START,
});

const loginSuccess = (users) => ({
  type: types.REGISTER_SUCCESS,
  payload: users,
});
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});
const loginFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});
const logoutStart = () => ({
  type: types.LOGOUT_START,
});
export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFailure = (error) => ({
  type: types.LOGOUT_FAILURE,
  payload: error,
});

export const addInBasket = (item) => ({
  type: types.ADD_BASKET,
  payload: item,
});
export const removeBasket = (item) => ({
  type: types.REMOVE_BASKET,
  payload: item,
});
export const registerintial = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerFailure(error.message));
      });
  };
};
export const loginintial = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

export const logoutIntial = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut(({ res }) => {
        dispatch(logoutSuccess(res));
      })
      .catch((error) => {
        dispatch(logoutFailure(error.message));
      });
  };
};
