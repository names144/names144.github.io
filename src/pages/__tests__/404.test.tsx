import * as React from 'react';
import renderer from 'react-test-renderer';

import NotFoundPage from '../404';

describe('NotFoundPage', () => {
  test('Should render', () => {
    const tree = renderer
      .create(<NotFoundPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
