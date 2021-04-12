import * as React from 'react';
import renderer from 'react-test-renderer';

import { Seo } from 'components';

import NotFoundPage from '../404';

jest.mock('components/Seo');

describe('NotFoundPage', () => {
  test('Should render', () => {
    const rendered = renderer.create(
      <NotFoundPage />,
    );
    
    const { root } = rendered;
    expect(root.findByType(Seo)).toBeDefined();
  });
});
