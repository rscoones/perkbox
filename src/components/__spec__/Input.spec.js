import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import App from '../Input.jsx';

describe('The input', () => {
  let wrapper = null;

  it('has a default label of "How much?"', () => {
    wrapper = mount(<App />);
    expect(wrapper.text()).toBe("How much?");
    wrapper = mount(<App label="Fred" />);
    expect(wrapper.text()).toBe("Fred");
  });

  it('has a default placeholder of "Enter currency"', () => {
    wrapper = mount(<App />);
    let input = wrapper.find("input");
    expect(input.props().placeholder).toBe("Enter currency");
    wrapper = mount(<App placeholder="Fred" />);
    input = wrapper.find("input");
    expect(input.props().placeholder).toBe("Fred");
  });

  it('emits an onChange event', () => {
    let count = 0;
    const onChange = () => {
      count++;
    };
    wrapper = mount(<App onChange={onChange} />);
    const button = wrapper.find('input');
    const text = "123456";
    button.simulate('change', {target: {value: text}});
    expect(count).toBe(1);
  })
});
