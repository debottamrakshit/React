import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import AddressSummary from './AddressSummay';
import KartItemList from '../KartItemList';

class CheckoutSummary extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           address: [],
           product: []
       } 
   } 

  render() {
    return (
      <div>
          <AddressSummary address={this.props.address} />
           <KartItemList kartItems={this.props.product}/>     
      </div>
    )
  }
}

CheckoutSummary.propTypes = {
    address: PropTypes.object.isRequired, 
    product: PropTypes.array.isRequired
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
        }        
    }
    return{
        address: address, 
        product: product
    }
}

export default connect(mapStateToProps)(CheckoutSummary);