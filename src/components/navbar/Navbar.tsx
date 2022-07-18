import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import styles from './navbar.module.scss';

const links = [
  {
    href: '/',
    label: 'CTA',
  },
];

const Navbar = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => setIsNavOpen((_isNavOpen) => !_isNavOpen);

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/">
          <img src="/baseline-icon-black.svg" alt="Baseline" />
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
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
            <Link key={link.label} onClick={toggleNav} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default Navbar;
