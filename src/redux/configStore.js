import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import Word from "./modules/Word";
import thunk from "redux-thunk";


const middlewares = [thunk];
const rootReducer = combineReducers({Word});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;