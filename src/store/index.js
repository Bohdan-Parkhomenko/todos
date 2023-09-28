import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from './customerReducer'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";


const roodReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer,
})
export const store = createStore(roodReducer, composeWithDevTools(applyMiddleware(thunk)));