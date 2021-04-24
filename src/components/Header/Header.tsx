import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { NavLinkId } from 'constants/index';

import { Section } from 'components';

type Props = React.PropsWithoutRef<Record<string, never>>;

const Header: React.FC<Props> = () => (
  <Section linkId={NavLinkId.HOME}>
    <div className="tw-flex tw-flex-col tw-items-center">
      <StaticImage
        alt="Picture of Nicholas Ames, Software Engineer"
        height={150}
        width={150}
        placeholder="dominantColor"
        className="tw-rounded-full tw-object-contain tw-ring-4 tw-ring-white"
        src="https://avatars1.githubusercontent.com/u/1704731?s=460&v=4" />
      <h1 className="tw-text-center tw-mt-6">
        <div className="tw-text-3xl tw-uppercase">Nicholas Ames</div>
        <div className="tw-text-2xl tw-mt-2">Software Engineer</div>
      </h1>
      <a
        target="_blank"
        rel="noreferrer noopener nofollow"
        href="https://www.linkedin.com/in/names144/"
        className="tw-text-xl tw-mt-2">
        https://www.linkedin.com/in/names144/
      </a>
    </div>
  </Section>
);

export default Header;
