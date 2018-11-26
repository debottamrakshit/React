import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import AddressSummary from './AddressSummay';
import KartItemList from '../KartItemList';

class CheckoutSummary extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           address: props.address,
           product: props.product,
           payment: props.paymentProps
       } 
   } 

  render() {
    return (
        <div className="container">
            <div className="row">
              <div className="text-center col-md-12 col-md-offset-0">           
                    <h4 className="text-uppercase bg-success text-center">DELIVERY DETAILS: </h4>
                </div>                             
            </div> 
            <div className="row">
                <div className="col-sm-3">                
                    <p className="text-uppercase">Order Placed: </p>
                </div>
                <div className="col-sm-2">
                    <p className="font-weight-bold">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(new Date())))}</p>
                </div>                
            </div> 
            <div className="row">
                <div className="col-sm-3">         
                    <p className="text-uppercase">Delivery Option:    </p>
                    
                </div>
                <div className="col-sm-3">         
                    {this.state.payment.type}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">         
                    <p className="text-uppercase">Order Number:    </p>
                    
                </div>
                <div className="col-sm-3">         
                    PLACEHOLDER
                </div>
            </div> 
            <div className="row">
                <div className="col-sm-3">         
                    <p className="text-uppercase">Order Total:    </p>
                    
                </div>
                <div className="col-sm-3">         
                  {this.state.payment.totalCost}
                </div>
            </div>   
            <div className="row">
                <div className="text-center col-md-12 col-md-offset-0">           
                    <h4 className="text-uppercase bg-success text-center">SHIPPED TO: </h4>
                </div>   
            </div>
            <AddressSummary address={this.state.address} />

            <div className="row">
                <div className="text-center col-md-12 col-md-offset-0">           
                    <h4 className="text-uppercase bg-success text-center">ITEMS ORDERED: </h4>
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
    let country = countries.filter(country => country.code == countryId);
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
        checkoutItem = state.checkout[0];
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