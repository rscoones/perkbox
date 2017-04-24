import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import App from '../App.jsx';
import Input from '../Input.jsx';
import Button from '../Button.jsx';

describe('The form', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has a button and Input Component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Input).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('accepts and enables the submit if a number greater than 0', () => {
    const input = wrapper.find("input");
    input.simulate("change", {target: {value: "123"}});
    expect(wrapper.find(".form-error").length).toBe(0);
    expect(wrapper.find("button").props().disabled).toNotBe(true);
  });

  it('rejects and disables the submit if an invalid or negative number is entered', () => {
    const input = wrapper.find("input");
    input.simulate("change", {target: {value: "abc123"}});
    wrapper.update();
    expect(wrapper.find(".form-error").length).toBe(1);
    expect(wrapper.find("button").props().disabled).toBe(true);
  });

  it('submit button is disabled if empty', () => {
    expect(wrapper.find("button").props().disabled).toBe(true);
  });
});
