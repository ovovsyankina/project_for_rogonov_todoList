import { node } from "prop-types";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(el);

    return () => document.body.removeChild(el);
  }, [el]);
  return ReactDOM.createPortal(children, el);
};

Portal.propTypes = { children: node };

export default Portal;
