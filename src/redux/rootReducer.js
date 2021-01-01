import { combineReducers } from "redux";
import shoppingReducer from "./shopping/shoppingReducer";

const allReducers = combineReducers({ shop: shoppingReducer });

export default allReducers;
