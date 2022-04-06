import React from 'react';
import Anchor from '../anchor/Anchor';
import styles from './ethos.module.scss';

const cards = [
  {
    icon: '',
    label: 'Value 1',
  },
  {
    icon: '',
    label: 'Value 2',
  },
  {
    icon: '',
    label: 'Value 3',
  },
  {
    icon: '',
    label: 'Value 4',
  },
];

const Ethos = (): JSX.Element => (
  <div className={styles.ethos}>
    <Anchor id="learnMore" />
    <div className={styles.ethosContent}>
      <div className={styles.copy}>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ultricies est sit amet libero iaculis, in congue lectus imperdiet. Ut
          a lacinia urna, vel consequat justo.
        </p>
      </div>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div key={card.label} className={styles.card}>
            {card.icon ? <img src={card.icon} alt={card.label} /> : null}
            <div className={styles.label}>{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Ethos;
