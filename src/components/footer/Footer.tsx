import React from 'react';
import styles from './footer.module.scss';

const Footer = (): JSX.Element => (
  <div className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.content}>
        <div className={styles.follow}>Follow us @devikaworld</div>
        <div className={styles.logo}>
          <a href="/#">
            <img src="/baseline-logo.svg" alt="Baseline" />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.footerNav}>
          <div className={styles.navItem}>
            <h2>Creations</h2>
            <div className={styles.links}>
              <div className={styles.column}>
                <a href="/collaborations">Collaborations</a>
              </div>
            </div>
          </div>
          <div className={styles.navItem}>
            <h2>Technology</h2>
            <div className={styles.links}>
              <div className={styles.column}>
                <a
                  target="_blank"
                  href="https://devikabaseline.com/"
                  rel="noreferrer"
                >
                  Baseline
                </a>
                <a
                  target="_blank"
                  href="https://www.devikabaseline.com/integrations.html"
                  rel="noreferrer"
                >
                  Integrations
                </a>
                <a
                  target="_blank"
                  href="https://www.devikabaseline.com/packages.html"
                  rel="noreferrer"
                >
                  Packages
                </a>
              </div>
            </div>
          </div>
          <div className={styles.navItem}>
            <h2>Other</h2>
            <div className={styles.links}>
              <div className={styles.column}>
                <a href="/legal/privacy-policy">Privacy Policy</a>
                <a href="/legal/online-terms-and-conditions">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
