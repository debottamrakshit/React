import countryApi from '../api/countryApi';
import * as TYPES from '../actions/actionTypes';


export default function loadCountriesActionSuccess(countries){
    return {type: TYPES.LOAD_COUNTRY_SUCCESS,  countries};
}


export function loadCountries(){
    return function(dispatch){
       return countryApi.getAllCountries().then(countries => {
           dispatch(loadCountriesActionSuccess(countries));
       }).catch(error => {
            throw error;
       });
    }
}
