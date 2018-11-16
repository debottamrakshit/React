import {combineReducers} from 'redux';
import products from './productsReducer';
import checkoutReducer from './checkoutReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
    products,
    checkout: checkoutReducer,
    countries: countryReducer
});

export default rootReducer;

