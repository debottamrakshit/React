import React, {PropTypes} from 'react';
import AddressForm from './AddressForm';
import {connect} from 'react-redux';
import checkoutApi from '../../api/checkoutApi';
import {bindActionCreators} from 'redux';
import * as checkoutAction from '../../actions/checkoutAction';
import KartItemList from './KartItemList';

class Checkout extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      address: [],
      checkout: Object.assign({}, props.checkout)      
    };
   this.changeDataOnPage=this.changeDataOnPage.bind(this);
   this.saveCheckoutInformation=this.saveCheckoutInformation.bind(this);
  }

//This method execute before render DOM
componentWillMount(){
  //console.log("Inside componentWillMount method: values : {"+this.props.address+"}");
  console.log("countries: "+this.props.countries);  
}
//This method execute after render DOM
componentDidMount(){
  console.log("Inside componentDidMount method");  
}

  componentWillReceiveProps(newProps){
    console.log("Inside componentWillMount method  state object: {  }");
  }

  changeDataOnPage(event){    
    console.log("Inside changeDataOnPage method event Handler  state object: { "+state+" }");
    const field = event.target.name;     
    address = this.state.address;    
    address[field] = event.target.value;
   return this.setState({address:address});
  }

  saveCheckoutInformation(event){
    console.log("Inside saveCheckoutInformation method event Handler state object: { "+state+" }");
    //event.preventDefault();
   // this.props.actions.saveCheckoutInfo(this.state.address).then(() => this.redirect());
  }

  render() {
    return (
      <div>
         <p>This is checkout page</p>
         <AddressForm address={this.props.address} onChnage={this.changeDataOnPage} onSave={this.saveCheckoutInformation} countries={this.props.countries}/>
         <KartItemList kartItems={this.props.product} />
      </div>
    )
  }
}

Checkout.propTypes = {  
  checkout: PropTypes.object.isRequired,
  countries: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state){  
  console.log("Inside mapStateToProps method state object: { "+state+" }");
  
  let formattedDropDown = [];
  if(state.countries && state.countries.length > 0){
    formattedDropDown = state.countries.map(country =>{
      return{
        value: country.code,
        text: country.name
      };
    });
  }

  let address = {};
  let product = [];
  if(state.checkout){
    let checkoutItem = state.checkout[0];
    if(checkoutItem){
      if(checkoutItem.address.length > 0)
        address = checkoutItem.address[0];
       product = checkoutItem.product;
    }
  }
  console.log(address);
  return{    
      address: address, 
      product: product,
      countries: formattedDropDown
    };
}

function mapDispatchToAction(dispatch){
  console.log("Inside mapDispatchToAction method");
  return{
    actions: bindActionCreators(checkoutAction, dispatch)    
  };
}

export default connect(mapStateToProps, mapDispatchToAction)(Checkout);