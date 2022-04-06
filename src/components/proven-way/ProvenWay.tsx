import React from 'react';
import styles from './proven-way.module.scss';

const ProvenWay = (): JSX.Element => (
  <div className={styles.provenWay}>
    <div className={styles.provenWayContent}>
      <div className={styles.awards}>
        Put some images here
      </div>
      <div className={styles.copy}>
        <h1>Examples</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ultricies est sit amet libero iaculis, in congue lectus imperdiet. Ut
          a lacinia urna, vel consequat justo. Ut volutpat elit in odio pretium
          hendrerit. Cras feugiat porttitor quam, eu molestie libero tincidunt
          id. Donec eu ligula nec ante rutrum interdum. Quisque hendrerit, mi eu
          fermentum pretium, nibh est sollicitudin orci, eu dapibus nibh justo
          ut risus.
        </p>
      </div>
    </div>
  </div>
);

export default ProvenWay;
