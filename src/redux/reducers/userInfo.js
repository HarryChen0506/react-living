//reducer 

import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from 'actions/userInfo.js';

let initState = {
}
export default function reducer(state=initState, action){
    switch(action.type){
        case GET_USER_INFO_REQUEST:
            return {
                ...state
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                ...action.data
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state
            };
        default: 
            return state
    }
}