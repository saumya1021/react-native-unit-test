/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import LoginScreen from '../src/Container/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('exists or not ', () => {
  expect(
    shallow(<LoginScreen />)
      .find('.login')
      .exists(),
  ).toBe(true);
});

it('renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
