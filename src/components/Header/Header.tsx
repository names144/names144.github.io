import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

type Props = React.PropsWithoutRef<Record<string, never>>;

const Header: React.FC<Props> = () => (
  <div className="container tw-flex tw-flex-col tw-items-center tw-mt-4">
    <StaticImage
      alt="Picture of Nicholas Ames"
      height={150}
      width={150}
      placeholder="dominantColor"
      className="tw-rounded-full tw-object-contain tw-ring-4 tw-ring-white"
      src="https://avatars1.githubusercontent.com/u/1704731?s=460&v=4" />
    <div className="tw-text-4xl tw-py-3">Nicholas Ames</div>
    <div className="tw-text-2xl tw-pl-3">Software Engineer</div>
    <a
      target="_blank"
      rel="noreferrer noopener nofollow"
      href="https://www.linkedin.com/in/names144/"
      className="tw-text-xl tw-text-gray-400 hover:tw-text-white">
        https://www.linkedin.com/in/names144/
    </a>
  </div>
);

export default Header;
