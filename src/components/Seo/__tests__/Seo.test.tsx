import * as React from 'react';
import renderer from 'react-test-renderer';

import Seo from '../Seo';

jest.mock('react-helmet', () => (props: any) => <mock-react-helmet {...props} />);

describe('Seo', () => {
  test('Should render', () => {
    const tree = renderer
      .create(<Seo title="Test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
