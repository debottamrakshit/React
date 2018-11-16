import axios from 'axios';

class ProductApi {
  static getAllProducts(dispatch) {
    let list = {};

    const request = axios.post('http://localhost:9000/test', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      console.log(response.data);
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
