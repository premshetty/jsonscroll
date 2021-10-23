


import { USER_REQUEST, USER_FAILURE, USER_SUCCESS } from './UserType'

const initialstate = {
    loading: false,
    user: [],
    error: ''
}
const ReducerUser = (state = initialstate, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_SUCCESS:
            return {

                loading: false,
                user: action.payload,
                error: ''
            }
        case USER_FAILURE:
            return {

                loading: false,
                user : [],
                error: action.payload,

            }

        default:
          return  state;
    }
}
export default ReducerUser;