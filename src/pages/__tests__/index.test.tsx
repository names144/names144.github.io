import * as React from 'react';
import renderer from 'react-test-renderer';

import Index from '../index';

jest.mock('components/Seo');

describe('Index', () => {
  test('Should render', () => {
    const tree = renderer
      .create(<Index />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
