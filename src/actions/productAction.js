import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import productApi from '../api/mockProductApi';


export function loadProductSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products};
}
export function loadProducts() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return productApi.getAllProducts().then(products => {
      dispatch(loadProductSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}
