import { combineReducers } from "redux";
import checkoutReducer from './checkoutReducer';
import countryReducer from './countryReducer';
const rootReducer = combineReducers({
    checkout: checkoutReducer,
    countries: countryReducer
});
export default rootReducer;