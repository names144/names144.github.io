import * as React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

describe('Footer', () => {
  test('Should render', () => {
    const rendered = renderer.create(
      <Footer />,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType('p')).toHaveLength(1);
  });
});
