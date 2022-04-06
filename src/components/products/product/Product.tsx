import React from 'react';
import Slider from 'react-slick';
import styles from './product.module.scss';

interface Props {
  slides: {
    leftContent: JSX.Element;
    rightContent: JSX.Element;
    image: string;
  }[];
}

const Product = (props: Props): JSX.Element => {
  const { slides } = props;

  return (
    <div className={styles.product}>
      <div className={styles.productContent}>
        <Slider
          dots
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          infinite
        >
          {slides.map((slide) => (
            <div key={`slide_${slide.image}`} className={styles.slide}>
              <div className={styles.slideContent}>
                <div className={styles.left}>{slide.leftContent}</div>
                <div className={styles.image}>
                  <img
                    src={slide.image || '/baseline-logo.svg'}
                    alt="Product screenshot"
                  />
                </div>
                <div className={styles.right}>{slide.rightContent}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
