import delay from './delay';
const CHECKOUT = [  
    {  
       "product":[  
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
       ],
       "address":[  
          {  
             id:"",
             line1:"",
             line2:"",
             city:"",
             state:"",
             zip:"",
             country:"", 
             countryName:""
          }
       ],
       "payment":[  
          {  
             "type":"COD"
          }
       ]
    }
 ];
class checkoutApi{
    static getCheckoutInfo(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], CHECKOUT))
            },
                delay);                      
        });
    }

    static saveCheckoutInfo(checkout){
         checkout = Object.assign({}, checkout);
         return new Promise((resolve, reject) => {
             setTimeout(() => {                
                resolve(Object.assign([], checkout));   
                //CHECKOUT.push(checkout);                
             }, delay);             
         });
    }
} 

const EXTRA = [  
    {  
       "product":[  
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
            id:"prd002",
            img:"/shared/images/iphone6s.jfif",
            name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
            desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
            price:"22,450.00 INR"
         },
         {  
            id:"prd002",
            img:"/shared/images/iphone6s.jfif",
            name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
            desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
            price:"22,450.00 INR"
         },
         {  
            id:"prd002",
            img:"/shared/images/iphone6s.jfif",
            name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
            desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
            price:"22,450.00 INR"
         },{  
            id:"prd001",
            img:"/shared/images/iphone6s.1.jfif",
            name:"Apple iPhone 6 (Gold, 1GB RAM, 32GB Storage)",
            desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
            price:"22,450.00 INR"
         }
       ],
       "address":[  
          {  
             id:"user_001",
             line1:"3PILLAR GLOBAL PVT LTD",
             line2:"B2 Candor Techspace, Tower-3, Ground Floor, Sector-62",
             city:"NOIDA",
             state:"UTTAR PRADESH",
             zip:"201301",
             country:"IN", 
             countryName:""
          }
       ],
       "payment":[  
          {  
             "type":"COD"
          }
       ]
    }
 ];

export default checkoutApi;
  