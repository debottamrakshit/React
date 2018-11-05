import checkoutApi from '../api/checkoutApi';
import * as TYPES from '../actions/actionTypes'
export function loadCheckoutActionSuccess(apiAddress){
    return {type: TYPES.LOAD_ADDRESS_SUCCESS, apiAddress};
}

export function saveCheckoutDetailsSuccess(checkout){
    return {type: TYPES.SAVE_CHECKOUT_SUCCESS, checkout};
}

export function loadCheckout(){  
    return function(dispatch){        
        return checkoutApi.getCheckoutInfo().then(apiAddress => {
            dispatch(loadCheckoutActionSuccess(apiAddress));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCheckout(){
    return function(dispatch){
        return checkoutApi.saveCheckout(checkout).then(saveCheckout => {
               return dispatch(saveCheckoutDetailsSuccess()); 
        }).catch(error => {
            throw(error);
        });
    }
}