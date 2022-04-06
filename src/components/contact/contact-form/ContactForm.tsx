import { Formik, FormikHelpers } from 'formik';
import React, { useCallback, useState } from 'react';
import styles from './contact-form.module.scss';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = (): JSX.Element => {
  const [alertMessage, setAlertMessage] = useState<string>();

  const showAlert = useCallback((success: boolean, message: string) => {
    setAlertMessage(message);
  }, []);

  const submitForm = async (
    values: FormValues,
    actions: FormikHelpers<any>,
  ) => {
    try {
      actions.setSubmitting(true);
      const response = await fetch(`url-to-post-to`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          request: {
            requester: {
              name: `${values.firstName} ${values.lastName}`,
              email: values.email,
            },
            subject: 'devika.com contact form',
            comment: {
              body: `Phone: ${values.phone}\n${values.message}`,
            },
          },
        }),
      });
      const data = await response.json();
      const { request } = data;
      showAlert(
        true,
        `Your message was received successfully and we will get back to you shortly!\nReference ID: ${request.id}.`,
      );
    } catch (error) {
      showAlert(
        false,
        `There was an error sending your message. Reason: ${error.message}`,
      );
    } finally {
      actions.setSubmitting(false);
      actions.resetForm();
    }
  };

  return (
    <div className={styles.contactForm}>
      <Formik
        initialValues={
          {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          } as FormValues
        }
        onSubmit={submitForm}
      >
        {(props: {
          handleSubmit;
          values;
          handleChange;
          handleBlur;
          isSubmitting;
        }) => (
          <form onSubmit={props.handleSubmit} className={styles.form}>
            <div className={styles.split}>
              <label htmlFor="firstName" className={styles.customInput}>
                First Name *
                <input
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={props.values.firstName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  disabled={props.isSubmitting}
                  required
                />
              </label>
              <label htmlFor="lastName" className={styles.customInput}>
                Last Name
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={props.values.lastName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  disabled={props.isSubmitting}
                />
              </label>
            </div>
            <label htmlFor="email" className={styles.customInput}>
              Email *
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                disabled={props.isSubmitting}
                required
              />
            </label>
            <label htmlFor="phone" className={styles.customInput}>
              Phone
              <input
                name="phone"
                id="phone"
                type="text"
                placeholder="Phone"
                value={props.values.name}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                disabled={props.isSubmitting}
              />
            </label>
            <label htmlFor="message" className={styles.customInput}>
              Message
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={4}
                value={props.values.message}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                disabled={props.isSubmitting}
              />
            </label>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                name="b_f1135bf2ef357c3946e809e05_132fc91bb8"
                type="text"
                value=""
                readOnly
              />
            </div>
            <button
              className="submitButton"
              type="submit"
              disabled={props.isSubmitting}
            >
              SUBMIT
            </button>
            <p className={styles.alert}>{alertMessage || ''}</p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
