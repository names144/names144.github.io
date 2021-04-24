import * as React from 'react';
import renderer from 'react-test-renderer';

import Section from '../Section';

describe('Section', () => {
  test('Should render w/ children', () => {
    const rendered = renderer.create(
      <Section>
        <p>Hello</p>
      </Section>,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType('p')).toHaveLength(1);
    expect(root.findAllByType('section')).toHaveLength(1);
  });
});
