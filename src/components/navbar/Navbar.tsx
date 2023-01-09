import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

const Navbar = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/">Logo Here</Link>
      </div>
    </div>
  );
};

export default Navbar;
