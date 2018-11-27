import * as TYPES from '../actions/actionTypes';
import INITIAL_STATE from './initialState';

export default function checkoutReducer(state = INITIAL_STATE.checkout, action) {
    switch (action.type) {
        case TYPES.LOAD_CHECKOUT_SUCCESS:
            return Object.assign([], action.apiCheckout);
        case TYPES.SAVE_CHECKOUT_SUCCESS:
            return [...state, Object.assign([], action.checkout)];
        case TYPES.REMOVE_PRODUCT_FROM_CHECKOUT_SUCCESS:
            return [...state, Object.assign([], action.checkout)];
        case TYPES.ADD_TO_CHECKOUT_SUCCESS:
            let stateProduct = state.product;
            if (stateProduct == null) {
                stateProduct = [];
            }
            if (state.length == 0) {
                state = [
                    ...state,
                    Object.assign({}, { 'product': [...stateProduct, Object.assign([], Object.assign({}, action.product, { count: 1 }))] })
                ];
            } else {
                const index = state[0].product.reduce((acc, currValue, currIndex, array) => {
                    if (acc !== -1) {
                        return currIndex;
                    } else if (currValue.id === action.product.id) {
                        return currIndex;
                    } else {
                        return acc;
                    }
                }, -1);
                let duplicateState;
                duplicateState = [Object.assign([], state[0])];
                if (index === -1) {
                    duplicateState[0].product = Object.assign([], [...state[0].product, Object.assign({}, action.product, { count: 1 })]);

                } else {
                    duplicateState[0].product = state[0].product.map(item => {
                        if (item.id === action.product.id) {
                            return Object.assign({}, item, { count: item.count + 1, price: (item.count + 1) * item.price });
                        }
                        return item;
                    });
                }
                state = duplicateState;
            }
            return state;
        default:
            return state;
    }
}