import React, {PropTypes} from 'react';
import AddressForm from './AddressForm';
import {connect} from 'react-redux';
import checkoutApi from '../../api/checkoutApi';
import {bindActionCreators} from 'redux';
import * as checkoutAction from '../../actions/checkoutAction';

class Checkout extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      address: Object.assign({}, props.address)     
    };
   this.changeDataOnPage=this.changeDataOnPage.bind(this);
   this.saveCheckoutInformation=this.saveCheckoutInformation.bind(this);
  }

  componentWillReceiveProps(newProps){
    alert(newProps);
    this.setState({address: Object.assign({}, newProps.address)});
  }

  changeDataOnPage(event){    
    const field = event.target.name;     
    checkout = this.state.address;
    address = checkout;
    address[field] = event.target.value;
    this.setState({address:address});
  }

  saveCheckoutInformation(event){
    event.preventDefault();
    this.props.actions.saveCheckoutInfo(this.state.address).then(() => this.redirect());
  }

  render() {
    return (
      <div>
         <p>This is checkout page</p>
         <AddressForm address={this.props.address} onChnage={this.changeDataOnPage} onSave={this.saveCheckoutInformation}/>
      </div>
    )
  }
}

Checkout.propTypes = {  
  address: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired

}

function mapStateToProps(state){  
  console.log(state.address);
return{    
    address: state.address
  };
}

function mapDispatchToAction(dispatch){
  return{
    actions: bindActionCreators(checkoutAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToAction)(Checkout);





