import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import styles from './navbar.module.scss';

const links = [
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/collaborations',
    label: 'Collaborations',
  },
  {
    href: '/contact',
    label: 'Contact Us',
  },
];

const Navbar = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => setIsNavOpen((_isNavOpen) => !_isNavOpen);

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="/">
          <img src="/baseline-icon-black.svg" alt="Baseline" />
        </a>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.mobile}>
          <div
            role="button"
            tabIndex={0}
            onClick={toggleNav}
            className={styles.toggle}
          >
            <img className={styles.ham} src="/hamburgerMenu.svg" alt="D" />
          </div>
        </div>
      </div>
      <Collapse isOpen={isNavOpen}>
        <div className={styles.collapseContent}>
          {links.map((link) => (
            <a key={link.label} onClick={toggleNav} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default Navbar;
