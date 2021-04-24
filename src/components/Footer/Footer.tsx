import * as React from 'react';

type Props = React.PropsWithoutRef<Record<string, never>>;

const Footer: React.FC<Props> = () => (
  <footer className="container tw-py-12 tw-flex tw-flex-col tw-items-center">
    <p>Designed &amp; Developed by Nicholas Ames</p>
  </footer>
);

export default Footer;
