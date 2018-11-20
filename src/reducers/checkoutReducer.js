import * as TYPES from '../actions/actionTypes';
import INITIAL_STATE from './initialState';

export default function checkoutReducer(state=INITIAL_STATE.checkout, action){
    switch (action.type) {
        case TYPES.LOAD_CHECKOUT_SUCCESS: 
            return Object.assign({}, action.apiCheckout);  
        case TYPES.SAVE_CHECKOUT_SUCCESS: 
            return [...state, Object.assign([], action.checkout)];    
        case TYPES.REMOVE_PRODUCT_FROM_CHECKOUT_SUCCESS:
            return [...state, Object.assign([], action.checkout)];   
        default: 
            return state;            
    }
}