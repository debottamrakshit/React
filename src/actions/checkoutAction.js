import checkoutApi from '../api/checkoutApi';
import * as TYPES from '../actions/actionTypes';
import {browserHistory} from 'react-router';

export function loadCheckoutActionSuccess(apiCheckout){
    return {type: TYPES.LOAD_CHECKOUT_SUCCESS, apiCheckout};
}

export function saveCheckoutDetailsSuccess(checkout){
    return {type: TYPES.SAVE_CHECKOUT_SUCCESS, checkout};
}

export function removeProductFromKart(checkout){
    return {type: TYPES.REMOVE_PRODUCT_FROM_CHECKOUT_SUCCESS, checkout};
}


export function loadCheckout(){  
    return function(dispatch){        
        return checkoutApi.getCheckoutInfo().then(apiCheckout => {            
            dispatch(loadCheckoutActionSuccess(apiCheckout));     
            browserHistory.push("/checkoutSummary");       
        }).catch(error => {
            throw(error);
        });
    };
}

export function addToCheckout(index, product){  
    return {type: TYPES.ADD_TO_CHECKOUT_SUCCESS, product };
}


//export const addToCheckout = product => ({type: TYPES.ADD_TO_CHECKOUT_SUCCESS, payload: product});

export function saveCheckout(checkout){
    return function(dispatch){
        return checkoutApi.saveCheckoutInfo(checkout).then(checkout => {
               return dispatch(saveCheckoutDetailsSuccess(checkout)); 
        }).catch(error =>{
            throw(error);
        });
    }
}


export function removeItem(checkout){
    return function(dispatch){
        return checkoutApi.removeProduct(checkout).then(checkout => {
            return dispatch(removeProductFromKart(checkout))
        }).catch(error => {
            throw(error);
        });
    }
}