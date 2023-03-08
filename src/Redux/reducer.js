import { combineReducers } from "redux";
import loginReducer from "./loginSlice";
import registrationReducer from "./registrationslice";

const rootReducer = combineReducers({
    login:loginReducer,
    registration:registrationReducer
});

export default rootReducer;