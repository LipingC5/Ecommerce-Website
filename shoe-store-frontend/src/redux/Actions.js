import axios from "axios";
import { Cookies } from 'react-cookie';
import * as ActionTypes from './ActionTypes';
import { API_ENDPOINT} from '../api/APIKey';

export function getDifferentShoes(){

    return (dispatch) => {
        return axios.get( API_ENDPOINT + "shoes")
        .then((response) => {
           if(response.status === 200){
               console.log(response.data);
               return response;
           }
           else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
           }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.data)
        //.then(response => response[0])
        .then (response => dispatch(displayProducts(response)))
        .catch(error => { alert(error.message) });
    }
}

export const addProductToStore = (product) => (dispatch) =>{

    const bearer = 'Bearer ' + localStorage.getItem('token');

    
    return(dispatch) => {
        axios({
            method: 'POST',
            url:  API_ENDPOINT + 'shoe',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(product)
        })
        .then((response) => {
            if(response.status === 201){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }

        },
        error => {
            var errmess = new Error(error.message);
            console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addToInventory(product)))
        .catch(error => {console.log(error.message)});
    }


}

export function displayProducts(shoes){
    return{
        type: ActionTypes.DISPLAY_PRODUCTS,
        payload: shoes
    }
}

export function addToInventory(shoe){
    return{
        type: ActionTypes.ADD_PRODUCT,
        payload: shoe
    }
}

export function productsFailed(errmess){
    return{
        type: ActionTypes.PRODUCTS_FAILED,
        payload: errmess
    }

}


//customers
export function getCustomer(){

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return(dispatch) => {

        dispatch(customerLoading(true));

        axios.get( API_ENDPOINT + 'Me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer           
            }
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data);
                return response;
            }
            else{
             var error = new Error('Error ' + response.status + ': ' + response.statusText);
             error.response = response;
             throw error;
            }
         },
         error => {
             var errmess = new Error(error.message);
             //console.log(error.message);
             throw errmess;
         })
         .then(response => response.data)
         .then (response => dispatch(displayCustomer(response)))
         .catch(error => dispatch(customerFailed(error.message)));
    }
}

export function displayCustomer(customer){
    return{
        type: ActionTypes.GET_CUSTOMER,
        payload: customer
    }
}

export function customerLoading(){
    return{
        type: ActionTypes.CUSTOMERS_LOADING
    }
}

export function customerFailed(errmess){
    return {
        type: ActionTypes.CUSTOMERS_FAILED,
        payload: errmess
    }
}


export function getCart(dispatch){

    const bearer = 'Bearer ' + localStorage.getItem('token');

    dispatch(cartLoading(true));

    return(dispatch) => {
        axios.get( API_ENDPOINT + 'Me/cart', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer           
            }
            
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }

        },
        error => {
            var errmess = new Error(error.message);
            //console.log(error.message);
            throw errmess;
        })
        .then(response => response.data)
        .then (response => dispatch(displayCart(response)))
        .catch(error => { console.log(error.message) });
    }

}

export const addShoeToCart = (product) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    dispatch(cartLoading(true));


    return(dispatch) => {
        axios({
            method: 'POST',
            url:  API_ENDPOINT + 'Me/cart/addshoe',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(product)
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }

        },
        error => {
            var errmess = new Error(error.message);
            //console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addShoe(product)))
        .catch(error => {console.log(error.message)});
    }

}


export const removeShoeFromCart = (product) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    //dispatch(cartLoading(true));

    return(dispatch) => {
        axios({
            method: 'PUT',
            url:  API_ENDPOINT + 'Me/cart/removeshoe',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(product)
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }

        },
        error => {
            var errmess = new Error(error.message);
            console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(removeShoe(response)))
        .then(response => console.log(response))
        .catch(error => {console.log(error)});
    }


}


export const clearAllFromCart = (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    //dispatch(cartLoading(true));

    return(dispatch) => {
        axios({
            method: 'PUT',
            url:  API_ENDPOINT + 'Me/cart/clear',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }

        },
        error => {
            var errmess = new Error(error.message);
            //console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(clearCart(response)))
        .catch(error => console.log(error))
  
    }
}


export function displayCart(cart){
    return {
        type: ActionTypes.GET_CART,
        payload: cart
    }
}

export function addShoe(shoe){
    return{
        type: ActionTypes.ADD_SHOE_TO_CART,
        payload: shoe
    }
}


export function removeShoe(cart){
    return{
        type: ActionTypes.REMOVE_SHOE_FROM_CART,
        payload: cart
    }
}

export function clearCart(cart){
    return {
        type: ActionTypes.CLEAR_CART,
        payload: cart
    }
}

export function cartLoading(){
    return {
        type: ActionTypes.CART_LOADING
    }
}

export function cartFailed(errmess){
    return {
        type: ActionTypes.CART_FAILED,
        payload: errmess
    }
}

//orders
export const makeOrder = (PaymentForm) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    //dispatch(ordersLoading(true));
        axios({
            method: 'POST',
            url:  API_ENDPOINT + 'Me/orders/add',
            headers:{
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            data:JSON.stringify(PaymentForm)
        })
        .then((response) => {
            if(response.status === 200 || response.status === 201){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addOrder(response)))
        .catch(error => console.log(error))
}


export const removeOrder = (orderId) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return(dispatch) => {
        axios({
            method: 'DELETE',
            url:  API_ENDPOINT + 'Me/orders/'+ orderId +'/remove',
            headers:{
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            //console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(deleteOrder(response)))
        .catch(error => console.log(error))
    }
}


export const fetchOrders = (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return(dispatch) => {
        axios({
            method: 'GET',
            url:  API_ENDPOINT + 'Me/orders',
            headers:{
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            //console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(getOrders(response)))
        .catch(error => console.log(error))
    }
}

export const clearAllOrders = (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return(dispatch) => {
        axios({
            method: 'DELETE',
            url:  API_ENDPOINT + 'Me/orders/clear',
            headers:{
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            //console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(clearOrders(response)))
        .catch(error => console.log(error))
    }
}

export function ordersLoading(isLoading){
    return {
        type: ActionTypes.ORDERS_LOADING,
        isLoading: isLoading
    }
}

export function ordersFailed(errmess){
    return {
        type: ActionTypes.ORDERS_FAILED,
        payload: errmess
    }
}

export function addOrder(orders){
    return {
        type: ActionTypes.ADD_ORDERS,
        payload: orders
    }
}

export function getOrders(orders){
    return {
        type: ActionTypes.ADD_ORDERS,
        payload: orders 
    }
}

export function deleteOrder(orders){
    return {
        type: ActionTypes.ADD_ORDERS,
        payload: orders 
    }
}

export function clearOrders(orders){
    return {
        type: ActionTypes.ADD_ORDERS,
        payload: orders 
    }
}

//shipping info
export const editShippingInfo = (shippingInfo) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

   // dispatch(loadingShippingInfo(true));

    return(dispatch) => {
        axios({
            method: 'PUT',
            url:  API_ENDPOINT + 'Me/customer/shippinginfo',
            headers:{
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(shippingInfo)
        })
        .then((response) => {
            if(response.status == 200){
                console.log(response.data);
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            console.log(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(updateShippingInfo(shippingInfo)))
        .then(response => console.log(response))
        .catch(error => {console.log(error)})
    }
}


export function updateShippingInfo(shippingInfo){
    return {
        type: ActionTypes.EDIT_SHIPPING_INFO,
        payload: shippingInfo
    }
}

export function loadingShippingInfo(isLoading){
    return {
        type: ActionTypes.SHIPPING_INFO_LOADING,
        isLoading: isLoading
    }
}

export function shippingInfoFailed(errmess){
    return {
        type: ActionTypes.SHIPPING_INFO_FAILED,
        payload: errmess
    }
}



