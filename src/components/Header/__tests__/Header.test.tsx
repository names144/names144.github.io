import * as React from 'react';
import renderer from 'react-test-renderer';

import Header from '../HEader';

describe('Header', () => {
  test('Should render', () => {
    const rendered = renderer.create(
      <Header />,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType('img')).toBeDefined();
  });
});
