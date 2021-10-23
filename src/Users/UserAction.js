import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from "./UserType";

import axios from "axios";
export const FetchUserRequest = () => {
    return {
        type: USER_REQUEST
    }
}


export  const FetchUserSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}


export  const FetchUserFailure = (error) => {
    return {
        type: USER_FAILURE,
        payload: error
    }
}


export const Fetchuser = () => {
    return (dispatch) => {
        dispatch(FetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
            const users = response.data;
            console.log( "prem" + response.data);
            dispatch(FetchUserSuccess(users))
        })
        .catch(error=>{
            const errormsg = error.message;
            dispatch( FetchUserFailure(errormsg))
        })
    }
}