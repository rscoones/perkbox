import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import App from '../Button.jsx';

describe('The button', () => {
  let wrapper = null;

  it('can be disabled', () => {
    wrapper = mount(<App disabled={true} />);
    const button = wrapper.find("button");
    expect(button.props().disabled).toBe(true);
  });

  it('has a default text of "Submit"', () => {
    wrapper = mount(<App />);
    expect(wrapper.text()).toBe("Submit");
    wrapper = mount(<App>test</App>);
    expect(wrapper.text()).toBe("test");
  })

  it('emits an onClick event', () => {
    let count = 0;
    const onClick = () => {
      count++;
    };
    wrapper = mount(<App onClick={onClick} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(count).toBe(1);
  })
});
