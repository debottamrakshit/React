import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import productApi from '../api/ProductApi';


export function loadProductSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products};
}
export function loadProducts() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return productApi.getAllProducts().then(products => {
      console.log(products);
      dispatch(loadProductSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}
