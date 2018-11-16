import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, size}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
        <div className="row">
          <div className="col-sm-2">
            <label htmlFor={name}>{label}</label>
          </div>
          <div className="col-sm-2">
            <div className="field">
              <input
                type="text"
                name={name}
                className="form-control-sm"
                placeholder={placeholder}
                value={value}
                onChange={onChange} size={size}/>
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
          </div>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
