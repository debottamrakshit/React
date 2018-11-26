import delay from './delay';
const CHECKOUT = [  
    {  
       "product":[          
            {  
                id:"prd001",
                img:"/shared/images/iphone6s.1.jfif",
                name:"Apple iPhone 6 (Gold, 1GB RAM, 32GB Storage)",
                desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
                price:"10,000.45 INR"
                
             },
             {  
                id:"prd002",
                img:"/shared/images/iphone6s.jfif",
                name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
                desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
                price:"10,000.45 INR"
             }
             ,
             {  
                id:"prd003",
                img:"/shared/images/iphone6s.jfif",
                name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
                desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
                price:"10,000.45 INR"
             },
             {  
                id:"prd004",
                img:"/shared/images/iphone6s.jfif",
                name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
                desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
                price:"10,000.45 INR"
             },
             {  
                id:"prd005",
                img:"/shared/images/iphone6s.jfif",
                name:"Apple iPhone 6 (Space Grey, 1GB RAM, 32GB Storage)",
                desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
                price:"10,000.45 INR"
             },{  
                id:"prd006",
                img:"/shared/images/iphone6s.1.jfif",
                name:"Apple iPhone 6 (Gold, 1GB RAM, 32GB Storage)",
                desc:"Phone 6 isn’t simply bigger - it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD Display. It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.",
                price:"10,000.45 INR"
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
         let errors = "";
         return new Promise((resolve, reject) => {
             setTimeout(() => { 
                if(checkout){
                    const minAddressLine = 1;                     
                    if(!checkout.address){
                        errors.concat("No Address is mention in checkout page") 
                        
                    }else{
                        let addressValidated = checkout.address;
                        if(!addressValidated.line1){
                            reject('Line 1 for address is blank');
                        }else{                            
                             if(addressValidated.line1.length < minAddressLine){
                                 reject('Line1 must be greater than ${minAddressLine} chars');
                             }
                        }
                        if(addressValidated.line2 && addressValidated.line2.length < minAddressLine){
                            reject('Line 2 for address should be greater than ${minAddressLine} chars');
                        }

                        if(!addressValidated.city ){
                            reject('City is required');
                        }else{
                            if(addressValidated.city.length < minAddressLine){
                                reject('City must be greater than ${minAddressLine} chars');
                            }
                        }

                        if(!addressValidated.state ){
                            reject('State is required');
                        }else{
                            if(addressValidated.state.length < minAddressLine || addressValidated.state.length > 2 ){
                                reject('State must be equals to 2');
                            }
                        }

                        if(!addressValidated.country ){
                            reject('Country is required');
                        }
                    }
                    
                    if(checkout.hasOwnProperty('payment') && checkout.payment.hasOwnProperty('type')){
                        let paymentType = checkout.payment.type;
                        if(paymentType == "")  {
                            reject('Please select the Payment Type');
                        }
                    }else{
                        reject('Please select the Payment Type');
                    }                   
                    
                    if(!checkout.product || checkout.product.length == 0) {
                        reject("No Item to checkout")
                    }

                }
                resolve(Object.assign([], checkout));   
                //CHECKOUT.push(checkout);                
             }, delay);             
         });
    }

    static removeProduct(checkoutSubmit){       
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], checkoutSubmit));
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
  