import React from 'react';
import styles from './about-banner.module.scss';

interface Props {
  heading: string;
  body: JSX.Element;
  images: string[];
  flipped?: boolean;
}

const AboutBanner = (props: Props): JSX.Element => {
  const { heading, body, images, flipped = false } = props;
  return (
    <div className={styles.aboutBanner}>
      <div
        className={`${styles.aboutBannerContent} ${
          flipped ? styles.flipped : ''
        }`}
      >
        <div className={styles.column}>
          <h1>{heading}</h1>
          {body}
        </div>
        <div className={styles.column}>
          <div className={styles.images}>
            {/* SCSS Styles will only render the first 3 of these images */}
            {images.map((image) => (
              <img src={image} key={image} alt="Decorative icons" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
