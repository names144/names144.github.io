import * as React from 'react';

import { NavLinkId } from 'constants/index';

import * as navStyles from './Nav.module.css';

const LINKS = [
  { href: `#${NavLinkId.ABOUT}`, text: 'About' },
  { href: `#${NavLinkId.EMPLOYMENT}`, text: 'Employment' },
  { href: `#${NavLinkId.EDUCATION}`, text: 'Education' },
  { href: `#${NavLinkId.PROJECTS}`, text: 'Projects' },
  { href: `#${NavLinkId.SKILLS}`, text: 'Skills' },
];

type Props = React.PropsWithoutRef<Record<string, never>>;

const Header: React.FC<Props> = () => (
  <div className="container tw-flex tw-flex-row tw-text-l tw-items-center">
    <a
      href="#"
      className="tw-text-white tw-text-xl">
      <span className="primary-green-text">N</span>AMES
    </a>
    {LINKS.map(({ href, text }) => (
      <a
        key={href}
        className={`${navStyles.navLink} ${window.location.hash === href ? navStyles.activeLink : ''}`.trim()} 
        href={href}>
        {text}
      </a>
    ))}
  </div>
);

export default Header;
