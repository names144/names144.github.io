import * as React from 'react';
import renderer from 'react-test-renderer';
import { StaticImage } from 'gatsby-plugin-image';

import Header from '../Header';

describe('Header', () => {
  test('Should render', () => {
    const rendered = renderer.create(
      <Header />,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType(StaticImage)).toHaveLength(1);
    expect(root.findAllByType('a')).toHaveLength(1);
  });
});
