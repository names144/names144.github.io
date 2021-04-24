import * as React from 'react';
import renderer from 'react-test-renderer';

import About from '../About';

describe('About', () => {
  test('Should render', () => {
    const rendered = renderer.create(
      <About />,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType('p')).toHaveLength(1);
  });
});
