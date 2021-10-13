import * as ActionTypes from './ActionTypes';



export const Shoes = (state = {
    shoes: []

}, action) => {
    switch(action.type){
        case ActionTypes.DISPLAY_PRODUCTS: {
            return{...state, shoes:[action.payload]}
        }
        default:
            return state;
    }
}

