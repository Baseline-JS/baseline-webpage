import React from 'react';
import styles from './loading.module.scss';

const Loading = (): JSX.Element => (
  <div className={styles.loading}>
    <div className={styles.loadingContent}>
      <img src="/baseline-logo.svg" alt="devikabaseline.com" />
    </div>
  </div>
);

export default Loading;
