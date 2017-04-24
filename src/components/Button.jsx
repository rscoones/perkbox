import React from 'react'
import PropTypes from 'prop-types';

const Input = (props) => {
  const children = props.children || "Submit"
  return (
    <button {...props}>{children}</button>
  )
}

Input.propTypes = {
  onClick: PropTypes.func
}

module.exports = Input;
