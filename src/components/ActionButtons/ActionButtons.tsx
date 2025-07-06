import React from "react";
import styles from "./ActionButtons.module.scss";

interface  ActionButtonsProps {
  onStart: () => void;
  onStop: () => void;
};

function ActionButtons({ onStart, onStop }: ActionButtonsProps) {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btnStart} onClick={onStart}>
        Start Example
      </button>
      <button className={styles.btnStop} onClick={onStop}>
        Stop
      </button>
    </div>
  );
}

export default ActionButtons;
