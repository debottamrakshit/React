//import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: "1",
    title: "Product1",
    img: "img1",
    description: "Product1 description",
    price: "6:20"
  },
  {
    id: "2",
    title: "Product2",
    img: "img2",
    description: "Product1 description",
    price: "6:20"
  },
  {
    id: "3",
    title: "Product3",
    img: "img3",
    description: "Product1 description",
    price: "6:20"
  },
  {
    id: "4",
    title: "Product4",
    img: "img4",
    description: "Product1 description",
    price: "6:20"
  }
];

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, 1000);
    });
  }
}


export default ProductApi;
