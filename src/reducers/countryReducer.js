import * as TYPES from '../actions/actionTypes';
import INITIAL_STATE from './initialState';

export default function checkoutReducer(state=INITIAL_STATE.countries, action){
    switch (action.type) {
        case TYPES.LOAD_COUNTRY_SUCCESS: 
            return Object.assign([], action.countries);            
        default: 
            return state;            
    }
}