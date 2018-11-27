import React, {PropTypes} from 'react';

const AddressSummary = ({address}) =>{
      return (
        <div className="row">
            <div className="col-sm-12">
              <strong className="strong">{address.line1}</strong>
            </div>    
            <div className="col-sm-12">
              <strong className="strong">{address.line2}</strong>
            </div>    
            <div className="col-sm-12">
              <strong className="strong">{address.city}</strong>
              <strong>&nbsp;</strong> 
              <strong>,</strong>
              <strong>&nbsp;</strong> 
              <strong className="strong">{address.state}</strong>
              <strong>&nbsp;</strong>    
              <strong className="strong">{address.zip}</strong>
            </div>                
            <div className="col-sm-12">
            <strong className="strong">{address.countryName}</strong>
            </div>
        </div>
    ) 

    
}

AddressSummary.propsTypes = {
  address: PropTypes.object.isRequired
}

export default AddressSummary;