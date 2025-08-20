import React from "react";
import styles from "./ActionButtons.module.scss";
import Button from "../Button/Button";

interface ActionButtonsProps {
  onStart: () => void;
  onStop: () => void;
}

function ActionButtons({ onStart, onStop }: ActionButtonsProps) {
  return (
    <div className={styles.btnContainer}>
      <Button text="Start Example" className={styles.btnStart} onClick={onStart}/>
      <Button text="Stop" className={styles.btnStop} onClick={onStop}/>
    </div>
  );
}

export default ActionButtons;
