import React, {PropTypes} from 'react';
import AddressForm from './AddressForm';
import {connect} from 'react-redux';
import checkoutApi from '../../api/checkoutApi';
import {bindActionCreators} from 'redux';
import * as checkoutAction from '../../actions/checkoutAction';
import KartItemList from './KartItemList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import PaymentOption from './PaymentOption';

class Checkout extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      address: [],
      product: Object.assign([], props.product),
      errors: {},      
      paymentOptions: Object.assign([], props.paymentOptionProps),
      paymentType : "", 
      totalCheckoutAmount: props.totalProductCost,
      showRemoveProduct: true
    };
   this.changeDataOnPage=this.changeDataOnPage.bind(this);
   this.saveCheckoutInformation=this.saveCheckoutInformation.bind(this);
   this.productToRemove=this.productToRemove.bind(this);
   this.selectPaymentTypes=this.selectPaymentTypes.bind(this);
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
    let product = [];
    if(this.props.product){
      product = this.props.product;
      //if(this.product.length != )
    }

    let newProducts = [];
    if(newProps.product){
      newProducts = newProps.product;
    }
    if(product.length != newProducts.length)
      this.setState({product: Object.assign([], newProducts)});

    if(this.props.totalProductCost != newProps.totalProductCost){
      this.setState({totalCheckoutAmount: newProps.totalProductCost});
    }



  }

  selectPaymentTypes(event){
    const field = event.target.name;
    let paymentType = this.state.paymentType;
    paymentType = event.target.value;
    return this.setState({paymentType: paymentType});
  }

  changeDataOnPage(event){    
    const field = event.target.name;     
    let address = this.state.address;    
    address[field] = event.target.value.toUpperCase();
    return this.setState({address:address});
  }

  saveCheckoutInformation(event){
    console.log("Inside saveCheckoutInformation method event Handler state object: { "+this.state+" }");
    event.preventDefault();
    let checkoutSubmit = [];

    checkoutSubmit.address=this.state.address;
    checkoutSubmit.product=this.state.product;

    let type = this.state.paymentType;
    let totalCost = this.state.totalCheckoutAmount;
   
    let payementTypeToSubmit = {};
    payementTypeToSubmit.type=type;
    payementTypeToSubmit.totalCost = totalCost;
    checkoutSubmit.payment = payementTypeToSubmit;
    
    
    this.props.actions.saveCheckout(checkoutSubmit).
    then(() => this.redirect()).
    catch(error => toastr.error(error));
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
        checkoutSubmit.address = Object.assign([], this.state.address);
        if(finalProducts)
          checkoutSubmit.product = Object.assign([], finalProducts);
        else checkoutSubmit.product = [];
        var newProductCost = getTotalProductPrice(finalProducts);
        this.setState({totalCheckoutAmount: newProductCost});
        this.props.actions.removeItem(checkoutSubmit).then(() => this.redirectOnCheckout());
      }else console.log("No Item to remove");
      
    }
  }

  render() {    
    return (
      <div className="container">
          <div className="text-center col-md-12 col-md-offset-0">
            <input type="submit" value="Save" onClick={this.saveCheckoutInformation}  className="btn btn-primary"/> 
         </div>
         <div className="text-center col-md-12 col-md-offset-0">
            <h1 className="bg-success text-left">CHECKOUT PAGE</h1>
            <h2 className="bg-info lead text-center">Payment Options ....</h2>
              <PaymentOption options={this.state.paymentOptions} value={this.state.paymentType}  onChange={this.selectPaymentTypes} totalCost={this.state.totalCheckoutAmount}/>
              <h2 className="bg-info lead text-center">Address ....</h2>
              <AddressForm address={this.state.address} 
                onChange={this.changeDataOnPage.bind(this)} 
                onSave={this.saveCheckoutInformation} 
                countries={this.props.countries}  errors={this.state.errors}/>
            <h2 className="bg-info lead text-center">Product ....</h2>
            <KartItemList kartItems={this.state.product} onClick={this.productToRemove} operation={this.state.showRemoveProduct}/>
         </div>
         
      </div>
    )
  }
}

Checkout.propTypes = {  
  //checkout: PropTypes.array.isRequired,
  address: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  paymentOptions: PropTypes.array.isRequired,
  paymentType: PropTypes.object.isRequired,
  totalCheckoutAmount:PropTypes.number.isRequired
}

function getTotalProductPrice(products){
  var returnValue = 0.00;
  if(products){
    for(var index = 0; index<products.length; index++){
      var  priceText=products[index].price+"";    
      let priceTest = priceText.replace(",", "").replace("INR", "");
      returnValue=returnValue+parseFloat(priceTest);
    }
    //returnValue = parseFloat(priceTest);
  } 

  return returnValue;
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

  let paymentDropDown = [{"text":"Cash On Delivery", "value":"COD" }];
  let totalProductCost = 0.00;


  let address = [];
  let product = [];
  if(state.checkout){
    let checkoutItem = state.checkout[0];
    if(checkoutItem){
      if(checkoutItem.address)
        address = checkoutItem.address;
        if(checkoutItem.product){
          product = checkoutItem.product;  
          totalProductCost = getTotalProductPrice(product);        
        }

    }
  }
  console.log("Total Product Cost: "+totalProductCost);
 
  return{    
      address: Object.assign([], address), 
      product: Object.assign([], product),
      countries: Object.assign([], formattedDropDown),
      paymentOptionProps: paymentDropDown,
      totalProductCost:totalProductCost
    };
}

function mapDispatchToAction(dispatch){
  console.log("Inside mapDispatchToAction method : checkout.js");
  return{
    actions: bindActionCreators(checkoutAction, dispatch)    
  };
}

export default connect(mapStateToProps, mapDispatchToAction)(Checkout);