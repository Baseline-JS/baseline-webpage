import React from 'react';
import styles from './enquiry.module.scss';

const Enquiry = (): JSX.Element => (
  <div className={styles.enquiry}>
    <form
      action="https://a-post-endpoint"
      target="_blank"
      method="post"
      className={styles.form}
    >
      <label htmlFor="FNAME" className={styles.customInput}>
        First Name *
        <input
          name="FNAME"
          id="FNAME"
          type="text"
          placeholder="First Name"
          required
        />
      </label>
      <label htmlFor="LNAME" className={styles.customInput}>
        Last Name *
        <input
          name="LNAME"
          id="LNAME"
          type="text"
          placeholder="Last Name"
          required
        />
      </label>
      <label htmlFor="MMERGE5" className={styles.customInput}>
        Business Name
        <input
          placeholder="Business Name"
          name="MMERGE5"
          id="MMERGE5"
          type="text"
        />
      </label>
      <label htmlFor="MMERGE4" className={styles.customInput}>
        Project Name
        <input
          placeholder="Project Name"
          name="MMERGE4"
          id="MMERGE4"
          type="text"
        />
      </label>
      <label htmlFor="EMAIL" className={styles.customInput}>
        Email *
        <input
          placeholder="Email"
          name="EMAIL"
          id="EMAIL"
          type="email"
          required
        />
      </label>
      <label htmlFor="MMERGE3" className={styles.customInput}>
        Phone Number
        <input
          placeholder="Phone Number"
          name="MMERGE3"
          id="MMERGE3"
          type="text"
        />
      </label>
      <div className={styles.optionsContainer}>
        <ul>
          <li>
            <label htmlFor="mce-group[13713]-13713-0">
              <input
                id="mce-group[13713]-13713-0"
                name="group[13713][1]"
                type="checkbox"
                value="1"
              />
              <span>AR Headset App</span>
            </label>
          </li>
          <li>
            <label htmlFor="mce-group[13713]-13713-6">
              <input
                id="mce-group[13713]-13713-6"
                name="group[13713][8]"
                type="checkbox"
                value="8"
              />
              <span>Mobile Custom App</span>
            </label>
          </li>
          <li>
            <label htmlFor="mce-group[13713]-13713-7">
              <input
                id="mce-group[13713]-13713-7"
                name="group[13713][16]"
                type="checkbox"
                value="16"
              />
              <span>VR Headset App</span>
            </label>
          </li>
          <li>
            <label htmlFor="mce-group[13713]-13713-9">
              <input
                id="mce-group[13713]-13713-9"
                name="group[13713][64]"
                type="checkbox"
                value="64"
              />
              <span>Website Custom App</span>
            </label>
          </li>
          <li>
            <label htmlFor="mce-group[13713]-13713-10">
              <input
                id="mce-group[13713]-13713-10"
                name="group[13713][128]"
                type="checkbox"
                value="128"
              />
              <span>Website Landing Page</span>
            </label>
          </li>
        </ul>
      </div>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input name="hidden-field" type="text" value="" readOnly />
      </div>
      <button className="submitButton" type="submit">
        Submit
      </button>
    </form>
  </div>
);

export default Enquiry;
