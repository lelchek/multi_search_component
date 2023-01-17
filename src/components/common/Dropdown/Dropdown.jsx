import React from 'react';
import styles from "./Dropdown.module.scss";

const Dropdown = ({ children, className }) => {
  return <ul className={`${styles.root} ${className}`}>{children}</ul>;
};

export default Dropdown;
