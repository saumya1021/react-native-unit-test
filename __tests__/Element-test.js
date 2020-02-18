import 'react-native';
import {shallow} from 'enzyme';
import React from 'react';
import LoginScreen from '../src/Container/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const findById = function(tree, testID) {
  if (tree.props && tree.props.testID === testID) {
    return tree;
  }
  if (tree.children && tree.children.length > 0) {
    let childs = tree.children;
    for (let i = 0; i < childs.length; i++) {
      let item = findById(childs[i], testID);
      if (typeof item !== 'undefined') {
        return item;
      }
    }
  }
};

it('finds the length of element', () => {
  const wrapper = shallow(<LoginScreen />);
  expect(wrapper.find('input')).toHaveLength(0);
  expect(wrapper.find('email')).toHaveLength(0);
  expect(wrapper.find('password')).toHaveLength(0);
  expect(wrapper.find('Button')).toHaveLength(0);
});

it('should render username input', () => {
  let tree = renderer.create(<LoginScreen />).toJSON();
  expect(findById(tree, 'email')).toBeDefined();
});

it('should not render username input', () => {
  let tree = renderer.create(<LoginScreen />).toJSON();
  expect(findById(tree, 'username')).toBeUndefined();
});

it('should change the password value', () => {
  let loginComponent = renderer.create(<LoginScreen />).getInstance();
  loginComponent.handleChange('some_password', 'password');
  expect(loginComponent.state.password).toEqual('some_password');
});

it('should change the email value', () => {
  let loginComponent = renderer.create(<LoginScreen />).getInstance();
  loginComponent.handleChange('abc@gmail.com', 'email');
  expect(loginComponent.state.email).toEqual('abc@gmail.com');
});

it('should handle submit click', () => {
  let wrapper = shallow(<LoginScreen handleSubmit={jest.fn()} />);
  const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
  wrapper.instance().forceUpdate();
  wrapper.update();
  wrapper
    .find('#btn')
    .first()
    .props('className')
    .onPress();
  expect(spy).toHaveBeenCalled();
  spy.mockClear();
});
