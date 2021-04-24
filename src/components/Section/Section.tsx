import * as React from 'react';

import * as styles from './Section.module.css';

type Props = React.PropsWithChildren<{
  linkId?: string,
}>;

const Section: React.FC<Props> = (props: Props) => (
  <div
    id={props.linkId}
    className={styles.sectionContainer}>
    <section className="container tw-py-8">
      {props.children}
    </section>
  </div>
);

export default Section;
