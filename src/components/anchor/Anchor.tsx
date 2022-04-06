import React from 'react';
import styles from './anchor.module.scss';

interface Props {
  id: string;
}

const Anchor = (props: Props): JSX.Element => {
  const { id } = props;
  return (
    <div className={styles.anchor}>
      <div className={styles.link} id={id} />
    </div>
  );
};

export default Anchor;
