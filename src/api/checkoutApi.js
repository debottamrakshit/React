import delay from './delay';
const ADDRESS = [  
    {  
        "id":"user_001",
        "address_line1":"3PILLAR GLOBAL PVT LTD",
        "address_line2":"B2 Candor Techspace, Tower-3, Ground Floor, Sector-62",
        "address_city":"NOIDA",
        "address_state":"UTTAR PRADESH",
        "address_zip":"201301",
        "address_country":"IN"
     }
 ];

class checkoutApi{
    static getCheckoutInfo(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], ADDRESS))
            },
                delay);                      
        });
    }

    static saveCheckoutInfo(checkout){
         checkout = Object.assign({}, checkout);
         return new Promise((resolve, reject) => {
             checkout.id='test_add';
             resolve(checkout);
             ADDRESS.push(checkout);
         });
    }
}



const CHECKOUT = [  
    {  
       "product":[  
 
       ],
       "address":[  
          {  
             "id":"user_001",
             "address_line1":"3PILLAR GLOBAL PVT LTD",
             "address_line2":"B2 Candor Techspace, Tower-3, Ground Floor, Sector-62",
             "address_city":"NOIDA",
             "address_state":"UTTAR PRADESH",
             "address_zip":"201301",
             "address_country":"India"
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
  