import React from 'react';
import { ChevronDown, ChevronUp } from "../../icons";

import styles from "./FilterButton.module.scss";

const FilterButton = ({ title, isActive = false, onClick }) => {
  return (
    <button onClick={onClick} className={styles.root}>
      <span className={styles.title}>{title}</span>
      <span>{isActive ? <ChevronUp /> : <ChevronDown />}</span>
    </button>
  );
};

export default FilterButton;
