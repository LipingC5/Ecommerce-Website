import * as ActionTypes from './ActionTypes';



export const Shoes = (state = {
    shoes: [],
    isLoading: true,
    errmess: null

}, action) => {
    switch(action.type){
        case ActionTypes.DISPLAY_PRODUCTS: {
            return{...state,isLoading:true, errmess:null,  shoes:[action.payload]}
        }
        case ActionTypes.ADD_PRODUCT:{
            return{...state, isLoading:true, errmess:null, shoes:[action.payload]}
        }
        default:
            return state;
    }
}

