import { combineReducers } from "redux";
import deviceReducer from "./reducers";
export default combineReducers({ data: deviceReducer });
