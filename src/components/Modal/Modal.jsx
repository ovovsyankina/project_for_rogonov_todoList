import React from "react";
import styles from "./Modal.module.scss";
import { bool, node } from "prop-types";
import Portal from "./Portal";

const Modal = ({ children, isOpen }) => {
  return (
    isOpen && (
      <Portal>
        <div className={styles.root}>
          <div className={styles.modal_window}>{children}</div>
        </div>
      </Portal>
    )
  );
};

Modal.propTypes = { children: node, isOpen: bool };

export default Modal;
