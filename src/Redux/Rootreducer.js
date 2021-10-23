import { combineReducers } from "redux";
import Cakereducer from "./cake/CakeReducer";
import IceReducer from "./IceCream/IceCreamReducer";
import ReducerUser from "../Users/UserReducer";
const RootReducer = combineReducers( {
    cake : Cakereducer,
    Ice : IceReducer,
    user : ReducerUser,
})

export default RootReducer;