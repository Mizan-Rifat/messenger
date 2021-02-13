import { combineReducers } from "redux";
import SessionUser from "../ducks/SessionUserDuck";

export const reducers = combineReducers({
    sessionUser:SessionUser
})