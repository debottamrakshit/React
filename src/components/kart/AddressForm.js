import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const AddressForm = ({address, onChange, onSave, countries}) => {
    return(
        <form>
            <TextInput name="line1" label="Line 1" 
            value={address.line1} 
            onChange={onChange} size="45" placeholder="Line 1"/>

            <TextInput name="line2" label="Line 2" 
            value={address.line2} 
            onChange={onChange} size="45" placeholder="Line 2"/>
            
            <TextInput name="city" label="City" 
            value={address.city} 
            onChange={onChange} size="30" placeholder="City"/>
            
            <TextInput name="state"  label="State" 
            value={address.state}  
            onChange={onChange} size="30" placeholder="State"/>
            
            <TextInput name="zip" label="Zip/Postal Code" 
            value={address.zip}  
            onChange={onChange} size="6" placeholder="Zip"/>
            
            <SelectInput name="country" label="Country" 
            defaultOption="Select Country" 
            options={countries} 
            value={address.country} size="30" placeholder="Country" onChange={onChange}
            /> 

            
        </form>
    );
};
AddressForm.propTypes={
    address: React.PropTypes.object.isRequired,
    countries: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.array//, 
//    onSave: React.PropTypes.func.isRequired
}
export default AddressForm;