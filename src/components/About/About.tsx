import * as React from 'react';

import { NavLinkId } from 'constants/index';

import { Section } from 'components';

type Props = React.PropsWithoutRef<Record<string, never>>;

const About: React.FC<Props> = () => (
  <Section linkId={NavLinkId.ABOUT}>
    <h2 className="tw-text-3xl primary-green-text tw-underline tw-mb-6">About Me</h2>
    <p>
      Hello, I&apos;m Nick, a software development engineer living and working in the Pacific Northwest. I enjoy creating web applications, finding creative ways to parse the internet and learning new tools and technologies to help aid me in my day-to-day tasks.
    </p>
  </Section>
);

export default About;
