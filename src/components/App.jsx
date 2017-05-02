import React from 'react'
import PropTypes from 'prop-types';
import Input from './Input.jsx';
import Button from './Button.jsx';
import CurrencyWebApi from '../services/CurrencyWebApi';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isValid: false,
      converted: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const {value} = event.target;
    const isValid = `${value}`.match(/^[0-9.]*$/g);
    this.setState({value, isValid});
  }

  handleSubmit() {
    const {value} = this.state;
    CurrencyWebApi.convert(value, "USD").then(amount => {
      this.setState({converted: `${value} in USD: ${amount}`})
    })
  }

  getError() {
    const {value, isValid} = this.state;
    if (value && !isValid) {
      return <span className="form-error">Please enter a number</span>
    }
  }

  render () {
    const {value, isValid, converted} = this.state;

    return (
      <form onSubmit={e => {e.preventDefault()}}>
        <Input value={value} onChange={this.handleInputChange} />
        {this.getError()}
        <Button onClick={this.handleSubmit} disabled={!isValid} />
        {converted ? converted : null}
      </form>
    )
  }
}
