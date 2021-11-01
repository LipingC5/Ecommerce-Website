import * as ActionTypes from './ActionTypes';



export const ShippingInfo = (state ={
    shippingInfo: null,
    isLoading: true,
    errMess: null
}, action) => {

    switch(action.type){
        case ActionTypes.SHIPPING_INFO_LOADING:
            return{...state, isLoading: true, errMess:null, shippingInfo: null}
        case ActionTypes.SHIPPING_INFO_FAILED:
            return{...state, isLoading: false, shippingInfo: null, errMess: action.payload}
        case ActionTypes.EDIT_SHIPPING_INFO:
            return{...state, isLoading: false, errMess: null, shippingInfo: action.payload}
        default:
            return state;
    }
}
