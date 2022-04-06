import React from 'react';
import EnquiryPopup from '../enquiry/enquiry-popup/EnquiryPopup';
import Countdown from './countdown/Countdown';
import styles from './countdowns.module.scss';

const Countdowns = (): JSX.Element => (
  <div className={styles.countdowns}>
    <Countdown
      index={1}
      heading="Lorem"
      subHeading="Lorem Ipsum"
      content={
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id.
          </p>
          <EnquiryPopup buttonStyle="text" />
        </>
      }
      image=""
    />
    <Countdown
      index={2}
      heading="Ipsum"
      subHeading="Ipsum Dolor"
      content={
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id.
          </p>
          <EnquiryPopup buttonStyle="text" />
        </>
      }
      image=""
    />
    <Countdown
      index={3}
      heading="Dolor"
      subHeading="Dolor Sit"
      content={
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id.
          </p>
          <EnquiryPopup buttonStyle="text" />
        </>
      }
      image=""
    />
    <Countdown
      index={4}
      heading="Sit"
      subHeading="Sit Amet"
      content={
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id.
          </p>
          <EnquiryPopup buttonStyle="text" />
        </>
      }
      image=""
    />
    <Countdown
      index={5}
      heading="Amet"
      subHeading="Amet Consectetur"
      content={
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id.
          </p>
          <EnquiryPopup buttonStyle="text" />
        </>
      }
      image=""
    />
  </div>
);

export default Countdowns;
