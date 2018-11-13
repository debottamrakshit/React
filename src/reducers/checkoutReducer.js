import * as TYPES from '../actions/actionTypes';
import INITIAL_STATE from './initialState';

export default function checkoutReducer(state=INITIAL_STATE.checkout, action){
    switch (action.type) {
        case TYPES.LOAD_ADDRESS_SUCCESS: 
            return Object.assign([], action.apiAddress);            
        default: 
            return state;            
    }
}