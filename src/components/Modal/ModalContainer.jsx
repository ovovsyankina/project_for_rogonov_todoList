import React, { useEffect } from "react";
import Modal from "./Modal";
import { bool, node } from "prop-types";

const ModalContainer = ({ children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return <Modal children={children} isOpen={isOpen} />;
};

ModalContainer.propTypes = {
  children: node,
  isOpen: bool,
};

export default ModalContainer;
