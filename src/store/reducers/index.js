import {combineReducers} from "redux";
import todoReducer from "./todoReducer";
import calculatorReducer from "./calculatorReducer";
import mtgReducer from "./mtg";

export const rootReducer = combineReducers({
    todo: todoReducer,
    calculator: calculatorReducer,
    mtg: mtgReducer
})