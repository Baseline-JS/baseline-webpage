import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Enquiry from '../Enquiry';
import styles from './enquiry-popup.module.scss';

interface Props {
  buttonStyle: 'solid' | 'text';
}

const EnquiryPopup = (props: Props): JSX.Element => {
  const { buttonStyle } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((open) => !open);

  return (
    <div className={styles.enquiryPopup}>
      <button
        className={
          buttonStyle === 'solid' ? styles.solidButton : styles.textButton
        }
        type="button"
        onClick={toggleIsOpen}
      >
        Contact Us
      </button>
      <Modal
        className={styles.enquiryModal}
        isOpen={isOpen}
        toggle={toggleIsOpen}
        size="lg"
        centered
        fullscreen="lg"
      >
        <ModalHeader toggle={toggleIsOpen} />
        <ModalBody>
          <Enquiry />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EnquiryPopup;
