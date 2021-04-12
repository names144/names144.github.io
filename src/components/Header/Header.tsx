import * as React from 'react';

import './Header.module.css';

type Props = React.PropsWithoutRef<Record<string, never>>;

const Header: React.FC<Props> = () => (
  <div className="container tw-flex tw-flex-row">
    <div className="tw-flex-auto">
      <div className="tw-text-4xl">Nicholas Ames</div>
      <div className="tw-text-xl">Software Engineer</div>
      
    </div>
    <div className="tw-flex-1">
      <img
        className="tw-rounded-full tw-object-contain tw-ring-4 tw-ring-gray-600"
        src="https://avatars1.githubusercontent.com/u/1704731?s=460&v=4" />
    </div>
  </div>
);

export default Header;
