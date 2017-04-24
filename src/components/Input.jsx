import React from 'react'
import PropTypes from 'prop-types';

const Input = (props) => {
  const label = props.label || "How much?";
  const placeholder = props.placeholder || "Enter currency";

  return (
    <fieldset>
      <label>
        {label}
        <input
          {...props}
          placeholder={placeholder} />
      </label>
    </fieldset>
  )
}

Input.propTypes = {
  onChange: PropTypes.func
}

module.exports = Input;
