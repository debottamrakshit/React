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
        case TYPES.ADD_TO_CHECKOUT_SUCCESS:
            console.log(action);
            let stateProduct = state.product;
            if(stateProduct == null){
                stateProduct = [];
            }        
            if(state.length == 0){
                state= [
                    ...state,
                    Object.assign({}, {'product': [...stateProduct, Object.assign([], action.product)]})
                ];
            }else{
            
                let duplicateState;
                duplicateState = [Object.assign([], state[0])];
                duplicateState[0].product=Object.assign([], [...state[0].product, Object.assign([], action.product)]);
                state = duplicateState; 
            }
          console.log(state);
          return state;
        default: 
            return state;            
    }
}