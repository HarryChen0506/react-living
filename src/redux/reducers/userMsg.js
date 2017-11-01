//reducer 

import {GET_USER_MSG_REQUEST, GET_USER_MSG_SUCCESS, GET_USER_MSG_FAIL} from 'actions/userMsg.js';

let initState = {
    isLoading: false,
    userMsg: {},
    errorMsg: ''
}
export default function reducer(state=initState, action){
    switch(action.type){
        case GET_USER_MSG_REQUEST:
            return {
                ...state,
                isLoading: true,
                userMsg: {},
                errorMsg: ''
            };
        case GET_USER_MSG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userMsg: action.userMsg,
                errorMsg: ''
            };
        case GET_USER_MSG_FAIL:
            return {
                ...state,
                isLoading: false,
                userMsg: {},
                errorMsg: '请求错误'
            };
        default: 
            return state
    }
}