import React, {PropTypes} from 'react'
import {address} from 'bootstrap';

const AddressSummary = ({address}) =>{
      return (
      <address className="form-inline">
              {address.line1} <br></br>{address.line2} <br></br>{address.city}<br></br>
              {address.state}<br></br>{address.zip}<br></br>{address.countryName}

        </address>
    )  
}

AddressSummary.propsTypes = {
  address: PropTypes.object.isRequired
}

export default AddressSummary;