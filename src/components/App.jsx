import React, { PropTypes } from 'react'
import Input from './Input.jsx';
import Button from './Button.jsx';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isValid: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const {value} = event.target;
    const isValid = `${value}`.match(/^[0-9.]*$/g);
    this.setState({value, isValid});
  }

  handleSubmit() {
    alert("yay");
  }

  getError() {
    const {value, isValid} = this.state;
    if (value && !isValid) {
      return <span className="form-error">Please enter a number</span>
    }
  }

  render () {
    const {value, isValid} = this.state;

    return (
      <form>
        <Input value={value} onChange={this.handleInputChange} />
        {this.getError()}
        <Button onClick={this.handleSubmit} disabled={!isValid} />
      </form>
    )
  }
}
