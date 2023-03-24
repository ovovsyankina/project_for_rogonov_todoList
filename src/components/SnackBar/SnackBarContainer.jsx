import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnackBar } from "../../redux/action";
import { snackBarTextSelector } from "../../redux/selector";
import SnackBar from "./SnackBar";
const SnackBarContainer = () => {
  const snackBarText = useSelector(snackBarTextSelector);
  const dispatch = useDispatch();
  const [isActiveSnackBar, setActiveSnackBar] = useState(false);

  useEffect(() => {
    if (snackBarText.length > 0) {
      setActiveSnackBar(true);
      setTimeout(() => {
        setActiveSnackBar(false);
        dispatch(setSnackBar(""));
      }, 5000);
    } else {
      setActiveSnackBar(false);
    }
  }, [snackBarText, dispatch, setActiveSnackBar]);

  return (
    <SnackBar isActiveSnackBar={isActiveSnackBar} snackBarText={snackBarText} />
  );
};

export default SnackBarContainer;
