import * as actionTypes from "./actionTypes";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { id: itemID },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id: itemID },
  };
};
export const adjustQuantity = (itemID, inputValue) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: { id: itemID, qty: inputValue },
  };
};
