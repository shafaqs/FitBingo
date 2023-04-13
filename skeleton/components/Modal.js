import React from 'react';
import styles from '../styles/Home.module.css'; // Import the CSS module

const Modal = ({ visible, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
