import {createStore, combineReducers} from "redux";
import Word from "./modules/Word";

const rootReducer = combineReducers({Word});

const store = createStore(rootReducer);

export default store;