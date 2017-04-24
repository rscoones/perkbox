import React, { PropTypes } from 'react'

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
