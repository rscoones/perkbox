import React, { PropTypes } from 'react'

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
