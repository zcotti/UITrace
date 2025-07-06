import React from "react";
import styles from "./Switcher.module.scss";

interface SwitcherProps {
  options: string[];
  activeOption: string;
  onChange: (option: string) => void;
};

function Switcher({ options, activeOption, onChange }: SwitcherProps) {
  return (
    <div className={styles.exampleSwitcher}>
      {options.map((option) => (
        <button
          key={option}
          className={`${styles.switcherBtn} ${
            activeOption === option ? styles.active : ""
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Switcher;
