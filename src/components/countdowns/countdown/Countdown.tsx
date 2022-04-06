import React from 'react';
import styles from './countdown.module.scss';

interface Props {
  index?: number;
  heading: string;
  subHeading?: string;
  content: JSX.Element;
  image: string;
  fill?: boolean;
}

const Countdown = (props: Props): JSX.Element => {
  const { index, heading, subHeading, content, image, fill } = props;
  return (
    <div className={`${styles.countdown} ${fill ? styles.fill : ''}`}>
      <div className={styles.countdownContent}>
        <div className={styles.copy}>
          {index && <div className={styles.index}>{index}</div>}
          <h1>{heading}</h1>
          {subHeading && <h2>{subHeading}</h2>}
          <div className={styles.content}>{content}</div>
        </div>
        <div className={styles.image}>
          {image ? <img src={image} alt={heading} /> : 'Image here'}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
