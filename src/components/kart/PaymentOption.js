import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';

const PaymentOption =  ({options, value, onChange, totalCost}) => {
    return(        
            <div classsName="row">
                <div classsName="col-sm-6">
                    <form>
                        <SelectInput name="paymentType" label="Payment Option" 
                        defaultOption="Payment Option" 
                        options={options} 
                        value={value} size="30" placeholder="Payment Option" onChange={onChange} />
                    </form>
                </div>
                <div classsName="col-sm-6">
                    <p className="text-primary">Total Cost : {totalCost}</p>
                </div>
            </div>        
    );
}

PaymentOption.propTypes={
    totalCost: PropTypes.number.isRequired    
}

export default PaymentOption; 