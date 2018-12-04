import axios from 'axios';

class ProductApi {
  static getAllProducts(dispatch) {
    let list = {};

    const request = axios.get('http://localhost:3300/getAllProducts', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.data;
    })
      .catch(function (error) {
        console.log(error);
        return error
      });

    return request;
  }

}
export default ProductApi;
