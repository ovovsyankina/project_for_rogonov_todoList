import React from "react";
import { string, bool } from "prop-types";
import styles from "./SnackBar.module.scss";

const SnackBar = ({ isActiveSnackBar, snackBarText }) => {
  return isActiveSnackBar && <div className={styles.root}>{snackBarText} </div>;
};

SnackBar.propTypes = {
  isActiveSnackBar: bool,
  snackBarText: string,
};

export default SnackBar;
