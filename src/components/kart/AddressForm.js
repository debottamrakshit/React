import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const AddressForm = () => {
    return(
        <form>
            <TextInput name="line1" label="Line 1" value="" onChange=""/>
            <TextInput name="line2" label="Line 2" value="" onChange=""/>
            <TextInput name="city" label="City" value="" onChange=""/>
            <TextInput name="state"  label="State" value=""  onChange=""/>
            <TextInput name="zip" label="Zip/Postal Code" value=""  onChange=""/>
            <SelectInput name="country" label="Country" defaultOption="Select Country" />   
        </form>
    );
};

export default AddressForm;