import * as ActionTypes from './ActionTypes';



export const Customer = (state = {
    customer:[],
    isLoading: true,
    errMess: null
}, action) => {
    switch(action.type){
        case ActionTypes.GET_CUSTOMER:
             return{...state, isLoading: false, errMess:null, customer:action.payload}   
        case ActionTypes.CUSTOMERS_LOADING:
             return{...state, isLoading: true, errMess: null, customer: []}
        case ActionTypes.CUSTOMERS_FAILED:
             return{...state, isLoading: false, customer: [], errMess: action.payload}
        default:
            return state;  
    }
}


