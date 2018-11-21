import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const AddressForm = ({address, onChange, onSave, countries, errors}) => {
    return(
        <form>
            <TextInput name="line1" label="Line 1" 
            value={address.line1} 
            onChange={onChange} size="45" placeholder="Line 1" error={errors.line1}/>

            <TextInput name="line2" label="Line 2" 
            value={address.line2} 
            onChange={onChange} size="45" placeholder="Line 2" error={errors.line2}/>
            
            <TextInput name="city" label="City" 
            value={address.city} 
            onChange={onChange} size="30" placeholder="City" error={errors.city}/>
            
            <TextInput name="state"  label="State" 
            value={address.state}  
            onChange={onChange} size="30" placeholder="State" error={errors.state}/>
            
            <TextInput name="zip" label="Zip Code" 
            value={address.zip}  
            onChange={onChange} size="6" placeholder="Zip" error={errors.zip}/>
            
            <SelectInput name="country" label="Country" 
            defaultOption="Select Country" 
            options={countries} 
            value={address.country} size="30" placeholder="Country" onChange={onChange} error={errors.country}
            />             
        </form>
    );
};
AddressForm.propTypes={
    address: React.PropTypes.array.isRequired,
    countries: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.array,
    errors: React.PropTypes.object//, 
//    onSave: React.PropTypes.func.isRequired
}
export default AddressForm;