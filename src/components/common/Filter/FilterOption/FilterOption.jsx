import React from 'react';
import styles from "./FilterOption.module.scss";

const FilterOption = ({ id, checked, label, onChange }) => {
  return (
    <li className={styles.root}>
      <input
        id={id}
        checked={checked}
        type="checkbox"
        className={styles.checkbox}
        onChange={(e) => onChange(e, id)}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </li>
  );
};

export default FilterOption;
