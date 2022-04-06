import React from 'react';
import styles from './collab-columns.module.scss';

const CollabColumns = (): JSX.Element => (
  <div className={styles.collabColumns}>
    <div className={styles.column}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/baseline-logo.svg" alt="group" />
        </div>
        <div className={styles.text}>Benefit 1</div>
      </div>
    </div>
    <div className={styles.column}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/baseline-logo.svg" alt="#1" />
        </div>
        <div className={styles.text}>Benefit 2</div>
      </div>
    </div>
    <div className={styles.column}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/baseline-logo.svg" alt="group" />
        </div>
        <div className={styles.text}>Benefit 3</div>
      </div>
    </div>
    <div className={styles.column}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/baseline-logo.svg" alt="#1" />
        </div>
        <div className={styles.text}>Benefit 4</div>
      </div>
    </div>
  </div>
);

export default CollabColumns;
