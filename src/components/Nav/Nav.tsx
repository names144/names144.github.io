import * as React from 'react';

import { NavLinkId } from 'constants/index';

import * as styles from './Nav.module.css';

const isBrowser = typeof window !== 'undefined';

const LINKS = [
  { href: `#${NavLinkId.ABOUT}`, text: 'About' },
  { href: `#${NavLinkId.EMPLOYMENT}`, text: 'Employment' },
  { href: `#${NavLinkId.EDUCATION}`, text: 'Education' },
  { href: `#${NavLinkId.PROJECTS}`, text: 'Projects' },
  { href: `#${NavLinkId.SKILLS}`, text: 'Skills' },
];

type Props = React.PropsWithoutRef<Record<string, never>>;

const Header: React.FC<Props> = () => (
  <nav className={`container ${styles.navContainer}`}>
    <a
      href={`#${NavLinkId.HOME}`}
      className={styles.logoLink}>
      <span className="primary-green-text">N</span>AMES
    </a>
    {LINKS.map(({ href, text }) => (
      <a
        key={href}
        className={`${isBrowser && window.location.hash === href ? styles.activeLink : ''}`.trim()} 
        href={href}>
        {text}
      </a>
    ))}
  </nav>
);

export default Header;
