import { createStore, applyMiddleware } from "redux";
import multi from "redux-multi";
import thunk from "redux-thunk";

import RootReducer from "./ducks";

import { REDUX_DEV_TOOLS } from "../config/reduxDevTools";

export default applyMiddleware(thunk, multi)(createStore)(RootReducer, REDUX_DEV_TOOLS);
