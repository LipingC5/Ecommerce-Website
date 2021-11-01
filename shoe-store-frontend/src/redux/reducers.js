import {combineReducers} from 'redux';
import {Shoes} from './shoes';
import {Customer} from'./customers';
import {Cart} from './cart';
import {Orders} from './orders';
import {ShippingInfo} from './shippingInfo';

export default combineReducers({
    shoes: Shoes, 
    customer: Customer,
    cart: Cart,
    orders: Orders,
    shippingInfo: ShippingInfo
})