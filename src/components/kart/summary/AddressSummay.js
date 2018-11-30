import React, {PropTypes} from 'react';

const AddressSummary = ({address}) =>{
      return (
        <div className="row normalPadding">
            <div className="col-sm-12">
              {address.line1}
            </div>    
            <div className="col-sm-12">
              {address.line2}
            </div>    
            <div className="col-sm-12">              
              {address.city}, {address.state}, {address.zip}
            </div>                
            <div className="col-sm-12">
            {address.countryName}
            </div>
        </div>
    ) 

    
}

AddressSummary.propsTypes = {
  address: PropTypes.object.isRequired
}

export default AddressSummary;