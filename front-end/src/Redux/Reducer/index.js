import headRedc from "./headRedc";
import { NavRedc } from "./NavRedc";
import { NavCate } from "./NavRedc";
import DataRedc from "./DataRedc";
import AddToWish from "./AddToWish";
import { combineReducers } from "redux";
import Toggle from './PageAction'
const rootReducer = combineReducers(
    {
        headRedc,
        NavRedc,
        NavCate,
        DataRedc,
        AddToWish,
        Toggle,
    }
);
export default rootReducer;