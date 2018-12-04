import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import AddressSummary from './AddressSummay';
import KartItemList from '../KartItemList';

class CheckoutSummary extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           address: props.state,
           product: props.product,
           payment: props.paymentProps
       } 
   } 

  render() {
    console.log(this.props);
    return (
        <div className="container">
            <h1>Order Summary</h1>
            <div className="row">
              <div className="col-md-12">           
                    <h2 className="collapsible">Shipping Details</h2>
                </div>                             
            </div> 
            <div className="normalPadding">
                <div className="row">
                    <div className="col-sm-3">                
                        <p>Order Placed: </p>
                    </div>
                    <div className="col-sm-2">
                        <p className="font-weight-bold">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(new Date())))}</p>
                    </div>                
                </div> 
                <div className="row">
                    <div className="col-sm-3">         
                        <p>Delivery Option:    </p>
                        
                    </div>
                    <div className="col-sm-3">         
                        {this.state.payment.type == "1" ? "Cash On Delivery": ""}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">         
                        <p>Order Number:    </p>
                        
                    </div>
                    <div className="col-sm-3">         
                        5456456
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm-3">         
                        <p>Order Total:    </p>
                        
                    </div>
                    <div className="col-sm-3">         
                      ${this.state.payment.totalCost}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">           
                    <h2 className="collapsible">Shipped To</h2>
                </div>   
            </div>
            <AddressSummary address={this.props.address} />

            <div className="row">
                <div className="col-md-12">           
                    <h2 className="collapsible">Items Ordered</h2>
                </div>   
            </div>
            <div className="row">                
                <KartItemList kartItems={this.state.product}/>
            </div>
       
        </div>
      
    )
  }
}

CheckoutSummary.propTypes = {
    address: PropTypes.object.isRequired, 
    product: PropTypes.array.isRequired,
    payment: PropTypes.object.isRequired
}

function getCountryName(countries, countryId){  
    let country = countries.filter(country => country.id == countryId);
    if(country)
        return country[0].name;
    return null;
}

function mapStateToProps(state){
    let countries = state.countries;

    let address = [{id: '', line1: '', line2:'', city:'',state:'', country:''}];
    let product = [];
    let payment = {};
    let checkoutItem = [];
    if(state.checkout){

        let checkoutState = state.checkout;
        let index = 0;
        if(checkoutState && checkoutState.length > 0){
            //fetch the last one
            index = (checkoutState.length -1)
        }
        checkoutItem = state.checkout;
        if(checkoutItem){
            if(checkoutItem.address){
                address=checkoutItem.address;
                let countryName = getCountryName(countries, address.country);
                address.countryName=countryName;
            }
            if(checkoutItem.product)
                product = checkoutItem.product;


            
            if(checkoutItem.payment){
                payment = checkoutItem.payment;
            }
        } 
    }
    return{
        address: address, 
        product: product,
        paymentProps: payment
    }
}

export default connect(mapStateToProps)(CheckoutSummary);