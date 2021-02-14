import { combineReducers } from "redux";
import SessionUser from "../ducks/SessionUserDuck";
import Contacts from "../ducks/ContactsDuck";

export const reducers = combineReducers({
    sessionUser:SessionUser,
    contacts:Contacts,
})