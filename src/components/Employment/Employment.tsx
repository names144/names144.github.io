import * as React from 'react';
import { useInView } from 'react-hook-inview';
import { NavLinkId } from 'constants/index';

import { Section } from 'components';

import employmentHistory from '../../../content/employment.json';
import * as styles from './Employment.module.css';

type TimelineProps = React.PropsWithoutRef<{
  startYear: string,
  endYear: string,
  title: string,
  company: string,
  city: string,
  state: string,
  description: string,
  accomplishments: string[],
}>;

export const TimelineItem: React.FC<TimelineProps> = (props: TimelineProps) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${inView ? `${styles.timelineItemShow}` : ''}`}
      data-date={`${props.startYear} - ${props.endYear}`}>
      <div className={`${styles.timelineContent} ${inView ? `${styles.timelineContentShow}` : ''}`}>
        <h3 className={`${styles.jobTitle}`}>{props.title}</h3>
        <p>{props.company} - {props.city}, {props.state}</p>
        <p>{props.description}</p>
        <ul>
          {props.accomplishments.map((acc) => (<li key={acc}>{acc}</li>))}
        </ul>
      </div>
    </div>
  );
};

type Props = React.PropsWithoutRef<Record<string, never>>;

const Employment: React.FC<Props> = () => (
  <Section linkId={NavLinkId.EMPLOYMENT}>
    <h2 className="tw-text-3xl tw-text-center tw-mb-4">Employment</h2>
    {employmentHistory.map((history) => (
      <TimelineItem
        key={JSON.stringify(history)}
        {...history} />
    ))}
  </Section>
);

export default Employment;
