import React from 'react';
import AddressForm from './AddressForm';
export default class Checkout extends React.Component{
  render() {
    return (
      <div>
         <p>This is checkout page</p>
         <AddressForm />
      </div>
    )
  }
}
