import * as ActionTypes from './ActionTypes';



export const Cart = (state = {
    cart:null,
    isLoading: true,
    errMess: null
}, action) => {
    switch(action.type){
        case ActionTypes.GET_CART:
             return{...state, isLoading: false, errMess: null, cart:action.payload}     
        case ActionTypes.ADD_SHOE_TO_CART:
            var shoe = action.payload;
            return{...state, isLoading: false, errMess: null }    
        case ActionTypes.REMOVE_SHOE_FROM_CART:
            return{...state, isLoading: false, errMess: null, cart:action.payload}    
        case ActionTypes.CLEAR_CART:
            var shoe = action.payload;
            return{...state, isLoading: false, errMess: null }    
        case ActionTypes.CART_LOADING:
            return{...state, isLoading: true, errMess: null, cart:null}
        case ActionTypes.CART_FAILED:
            return{...state, isLoading: false, cart: null, errMess:action.payload}
        default:
            return state;  
    }
}
