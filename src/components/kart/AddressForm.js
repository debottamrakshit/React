import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const AddressForm = ({address, onChange, onSave, countries}) => {
    return(
        <form>
            <TextInput name="line1" label="Line 1" 
            value={address.address_line1} 
            onChange={onChange} />

            <TextInput name="line2" label="Line 2" 
            value={address.address_line2} 
            onChange={onChange}/>
            
            <TextInput name="city" label="City" 
            value={address.address_city} 
            onChange={onChange}/>
            
            <TextInput name="state"  label="State" 
            value={address.address_state}  
            onChange={onChange}/>
            
            <TextInput name="zip" label="Zip/Postal Code" 
            value={address.address_zip}  
            onChange={onChange}/>
            
            <SelectInput name="country" label="Country" 
            defaultOption="Select Country" 
            options={countries} 
            value={address.address_country} 

            /> 

            <input type="submit"  value="Save" onSave={onSave}  className="btn btn-primary"/> 
        </form>
    );
};

AddressForm.propTypes={
    address: React.PropTypes.object.isRequired,
    countries: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.array, 
    onSave: React.PropTypes.func.isRequired
}
export default AddressForm;