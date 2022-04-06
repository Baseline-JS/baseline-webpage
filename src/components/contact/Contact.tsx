import React from 'react';
import EnquiryPopup from '../enquiry/enquiry-popup/EnquiryPopup';
import styles from './contact.module.scss';

const Contact = (): JSX.Element => (
  <div className={styles.contactForm}>
    <div className={styles.content}>
      <h1>Contact Us</h1>
      <EnquiryPopup buttonStyle="solid" />
    </div>
  </div>
);

export default Contact;
