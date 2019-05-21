import React from 'react';
import Header from './header';

describe('header', () => {
  it('should render header', () => {
    const component = <Header />;

    expect(component).toMatchSnapshot();
  });
});