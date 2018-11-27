import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options, size}) => {
  return (
    <div className="form-group">
      <div className="row">      
          <div className="col-sm-2">
              <label htmlFor={name}>{label}</label>
          </div>
          <div className="col-sm-10">
            <div className="field">
              <select
                name={name}
                value={value}
                onChange={onChange}
                className="form-control-sm">
                <option value="">{defaultOption}</option>          
                {options.map((option) => {
                  return <option key={option.value} value={option.value}>{option.text}</option>
                })
                }
              </select>
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
          </div>
      </div>    
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
