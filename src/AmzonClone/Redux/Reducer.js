import * as types from "./ActionType";
const initialState = {
  loading: false,
  basket: [],
  user: null,
  error: null,
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BASKET:
      const newBasket = [...state.basket, action.payload];
      return {
        ...state,
        basket: newBasket,
      };
    case types.REMOVE_BASKET:
      let updateBasket = [...state.basket];
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      console.log("index", index);
      if (index >= 0) {
        updateBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: updateBasket,
      };
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};
