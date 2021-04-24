import * as React from 'react';
import renderer from 'react-test-renderer';
import { useInView as useInViewMock } from 'react-hook-inview';

import Employment, { TimelineItem } from '../Employment';
import * as styles from '../Employment.module.css';

jest.mock('react-hook-inview');

const useInView = useInViewMock as unknown as jest.Mock<typeof useInViewMock>;
useInView.mockImplementation(() => [undefined, false] as any);

describe('Employment', () => {
  test('Should render when not in view', () => {
    const rendered = renderer.create(
      <Employment />,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType('h2')).toHaveLength(1);
    expect(root.findAllByType(TimelineItem).length).toBeGreaterThan(1);
    expect(root.findAllByProps({
      className: `${styles.timelineContent} `,
    }));
  });

  test('Should render when not in view', () => {
    useInView.mockImplementationOnce(() => [undefined, true] as any);
    const rendered = renderer.create(
      <Employment />,
    );

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findAllByType('h2')).toHaveLength(1);
    expect(root.findAllByType(TimelineItem).length).toBeGreaterThan(1);
    expect(root.findAllByProps({
      className: `${styles.timelineContent} ${styles.timelineContentShow}`,
    }));
  });
});
