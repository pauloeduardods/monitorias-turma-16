import { combineReducers } from "redux";
import numberReducer from './numberReducer';

// CombineReducers é uma função do redux que faz a junção de vários reducers
const rootReducers = combineReducers({ numberReducer });

export default rootReducers;