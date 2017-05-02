import React from 'react'
import PropTypes from 'prop-types';

const Currency = (props) => {
  return (
    <fieldset>
      <label>
        {label}
        <select>
          {props.currencies.map(currency =>
            <option>{currency}</option>
          )}
        </select>
      </label>
    </fieldset>
  )
}

Currency.propTypes = {
  onChange: PropTypes.func
}

module.exports = Currency;
