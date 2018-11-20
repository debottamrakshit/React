import React, {PropTypes} from 'react';
import AddressForm from './AddressForm';
import {connect} from 'react-redux';
import checkoutApi from '../../api/checkoutApi';
import {bindActionCreators} from 'redux';
import * as checkoutAction from '../../actions/checkoutAction';
import KartItemList from './KartItemList';
import {browserHistory} from 'react-router';

class Checkout extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      address: [],
      product: Object.assign([], props.product),
      errors: {}
    };
   this.changeDataOnPage=this.changeDataOnPage.bind(this);
   this.saveCheckoutInformation=this.saveCheckoutInformation.bind(this);
   this.productToRemove=this.productToRemove.bind(this);
  }

//This method execute before render DOM
componentWillMount(){
  console.log("Inside componentWillMount method: values : checkout.js");
  //console.log("countries: "+this.props.countries);  
}
//This method execute after render DOM
componentDidMount(){
  console.log("Inside componentDidMount method of : checkout.js");  
  
}

  componentWillReceiveProps(newProps){
    console.log("Inside componentWillReceiveProps method  : checkout.js "+newProps);
    //this.setState({product: Object.assign([], newProps.product)});
  }

  changeDataOnPage(event){    
    const field = event.target.name;     
    let address = this.state.address;    
    address[field] = event.target.value;
    return this.setState({address:address});
  }

  saveCheckoutInformation(event){
    console.log("Inside saveCheckoutInformation method event Handler state object: { "+this.state+" }");
    event.preventDefault();
    let checkoutSubmit = [];

    checkoutSubmit.address=this.state.address;
    checkoutSubmit.product=this.state.product;   
    
    this.props.actions.saveCheckout(checkoutSubmit).then(() => this.redirect());
  }

  redirect(){
    browserHistory.push("/checkoutSummary");
  }
  redirectOnCheckout(){
    browserHistory.push("/checkout");
  }

  productToRemove(productId){
    let products = this.state.product;
    let finalProducts = this.state.product;
    if(productId){
      let productIdToRemove = products.filter(product => {return product.id == productId});
      if(productIdToRemove){
         for(var item=0; item < products.length; item++){
            if(products[item].id == productIdToRemove[0].id){
              finalProducts.splice(item, 1);
            }
         } 
        let checkoutSubmit = [];
        checkoutSubmit.address = this.state.address;
        if(finalProducts)
          checkoutSubmit.product = Object.assign([], finalProducts);
        else checkoutSubmit.product = [];
        this.props.actions.removeItem(checkoutSubmit).then(() => this.redirectOnCheckout());
      }else console.log("No Item to remove");
      
    }
  }

  removeProductFromKart(event){
    console("Inside removeProductFromKart method of : checkout.js");
    
  }

  render() {    
    return (
      <div>
         <p>CHECKOUT PAGE</p>
         <AddressForm address={this.state.address} 
            onChange={this.changeDataOnPage.bind(this)} 
            onSave={this.saveCheckoutInformation} 
            countries={this.props.countries}  errors={this.state.errors}/>
         <KartItemList kartItems={this.state.product} onClick={this.productToRemove}/>
         <input type="submit"  value="Save" onClick={this.saveCheckoutInformation}  className="btn btn-primary"/> 

      </div>
    )
  }
}

Checkout.propTypes = {  
  //checkout: PropTypes.array.isRequired,
  address: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}



function mapStateToProps(state, ownProps){  
  console.log("Inside mapStateToProps method : checkout.js");
  let formattedDropDown = [];
  if(state.countries && state.countries.length > 0){
    formattedDropDown = state.countries.map(country =>{
      return{
        value: country.code,
        text: country.name
      };
    });
  }

  let address = [];
  let product = [];
  if(state.checkout){
    let checkoutItem = state.checkout[0];
    if(checkoutItem){
      if(checkoutItem.address)
        address = checkoutItem.address;
        if(checkoutItem.product)
          product = checkoutItem.product;
    }
  }

  if(ownProps.params){
    var productId = ownProps.params.productId;
    console.log("Product Id to remove: "+productId);
    

  }

  return{    
      address: Object.assign([], address), 
      product: Object.assign([], product),
      countries: Object.assign([], formattedDropDown)
    };
}

function mapDispatchToAction(dispatch){
  console.log("Inside mapDispatchToAction method : checkout.js");
  return{
    actions: bindActionCreators(checkoutAction, dispatch)    
  };
}

export default connect(mapStateToProps, mapDispatchToAction)(Checkout);