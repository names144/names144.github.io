import * as React from 'react';
import renderer from 'react-test-renderer';

import { NavLinkId } from 'constants/index';

import Nav from '../Nav';

describe('Nav', () => {
  test('Should render w/o active links', () => {
    const rendered = renderer.create(
      <Nav />,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType('a')).toHaveLength(6);
  });

  test('Should render w/ active links', () => {
    window.location.hash = `#${NavLinkId.ABOUT}`;
    const rendered = renderer.create(
      <Nav />,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType('a')).toHaveLength(6);
    expect(root.findAllByType('a')[1].props.className.split(' ')).toHaveLength(2);
  });
});
