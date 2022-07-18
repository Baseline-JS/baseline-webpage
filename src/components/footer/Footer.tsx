import React from 'react';
import styles from './footer.module.scss';

const Footer = (): JSX.Element => (
  <div className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <a href="/#">
            <img src="/baseline-logo.svg" alt="Baseline" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
