import * as React from 'react';
import renderer from 'react-test-renderer';

import {
  Seo,
  Header,
  Nav,
  About,
  Employment,
} from 'components';

import Index from '../index';

jest.mock('components/Seo');

describe('Index', () => {
  test('Should render', () => {
    const rendered = renderer.create(
      <Index />,
    );
    
    const { root } = rendered;
    expect(root.findByType(Seo)).toBeDefined();
    expect(root.findByType(Header)).toBeDefined();
    expect(root.findByType(Nav)).toBeDefined();
    expect(root.findByType(About)).toBeDefined();
    expect(root.findByType(Employment)).toBeDefined();
  });
});
