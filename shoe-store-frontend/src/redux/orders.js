import * as ActionTypes from './ActionTypes';

export const Orders = (state = { 
    orders: null,
    errmess: null,
    isLoading: true

}, action) => {

    switch(action.type){
        case ActionTypes.ORDERS_LOADING:
            return{...state, isLoading: true, orders: null, errmess: null}
        case ActionTypes.ORDERS_FAILED:
            return{...state, isLoading: false, orders: null, errmess: action.payload}
        case ActionTypes.ADD_ORDERS:
            return{...state, isLoading: false, orders: action.payload, errmess: null}
        case ActionTypes.GET_ORDERS:
            return{...state, isLoading: false, orders: action.payload, errmess: null}
        case ActionTypes.DELETE_ORDER:
            return{...state, isLoading: false, orders: action.payload, errmess: null}
        default:
            return state
    }
}