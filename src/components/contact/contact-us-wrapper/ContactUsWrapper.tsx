import React from 'react';
import ContactForm from '../contact-form/ContactForm';
import styles from './contact-us-wrapper.module.scss';

const ContactUsWrapper = (): JSX.Element => (
  <div className={styles.contactUsWrapper}>
    <div className={styles.content}>
      <div className={styles.contact}>
        <h1>City</h1>
        <p>
          Address Line 1
          <br />
          Address Line 2
        </p>
        <h1>City</h1>
        <p>
          Address Line 1
          <br />
          Address Line 2
        </p>
        <h1>City</h1>
        <p>
          Address Line 1
          <br />
          Address Line 2
        </p>
      </div>
      <div className={styles.form}>
        <h1>Contact Form</h1>
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactUsWrapper;
