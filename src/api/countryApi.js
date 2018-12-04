import delay from "./delay";
import axios from 'axios';

class countryApi{
  static getAllCountries(){
    let list = {};

    const request = axios.get('http://localhost:3300/getCountries', {
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

export default countryApi;