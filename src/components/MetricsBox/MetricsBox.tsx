import React from "react";
import styles from "./MetricsBox.module.scss";

interface MetricsProps {
  renderTime: Number;
  reRenders: Number;
  fps: Number;
  memoryUsage: Number;
  virtualDom: Number;
  compUpd: Number;
}

function MetricsBox({
  renderTime,
  reRenders,
  fps,
  memoryUsage,
  virtualDom,
  compUpd,
}: MetricsProps) {
  return (
    <div className={styles.metricsBox}>
      <div className={styles.row}>
        <span>Render Time</span>
        <span className={styles.green}>{renderTime.toString()} ms</span>
      </div>
      <div className={styles.row}>
        <span>Re-renders</span>
        <span>{reRenders.toString()}</span>
      </div>
      <div className={styles.row}>
        <span>FPS</span>
        <span className={styles.green}>{fps.toString()}</span>
      </div>
      <div className={styles.row}>
        <span>Memory Usage</span>
        <span className={styles.blue}>{memoryUsage.toString()} mb</span>
      </div>
      <div className={styles.row}>
        <span>Virtual Dom</span>
        <span className={styles.green}>{virtualDom.toString()} ms</span>
      </div>
      <div className={styles.row}>
        <span>Component Update</span>
        <span className={styles.green}>{compUpd.toString()} ms</span>
      </div>
    </div>
  );
}

export default MetricsBox;
