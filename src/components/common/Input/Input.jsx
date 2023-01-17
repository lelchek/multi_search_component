import styles from "./Input.module.scss";

const Input = ({ placeholder, onChange, onFocus, value }) => {
  return (
    <input
      onFocus={onFocus}
      className={styles.root}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
