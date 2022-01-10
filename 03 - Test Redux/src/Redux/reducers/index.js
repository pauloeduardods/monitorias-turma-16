import { combineReducers } from "redux";
import priceReducer from "./priceReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ price: priceReducer, user: userReducer });

export default rootReducer;
