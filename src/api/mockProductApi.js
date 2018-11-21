//import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [          
  {  
      id:"prd001",
      img:"/shared/images/iphone6s.1.jfif",
      name:"Apple iPhone 6 (Gold, 1GB RAM, 32GB Storage)",
      desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
      price:"22,450.00 INR"
   },
   {  
      id:"prd002",
      img:"/shared/images/iphone6s.jfif",
      name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
      desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
      price:"22,450.00 INR"
   }
   ,
   {  
      id:"prd003",
      img:"/shared/images/iphone6s.jfif",
      name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
      desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
      price:"22,450.00 INR"
   },
   {  
      id:"prd004",
      img:"/shared/images/iphone6s.jfif",
      name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
      desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
      price:"22,450.00 INR"
   },
   {  
      id:"prd005",
      img:"/shared/images/iphone6s.jfif",
      name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
      desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
      price:"22,450.00 INR"
   },{  
      id:"prd006",
      img:"/shared/images/iphone6s.1.jfif",
      name:"Apple iPhone 6 (Gold, 1GB RAM, 32GB Storage)",
      desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
      price:"22,450.00 INR"
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
