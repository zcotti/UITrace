import React from "react";
import styles from "./ChartsBox.module.scss";
import RenderChart from "../RenderChart/RenderChart";

function ChartsBox() {
  return (
    <div className={styles.chartsBox}>
      <div className={styles.chartItem}>
        <h4 className={styles.chartTitle}>Render Time</h4>
        <RenderChart/>
      </div>
      <div className={styles.chartItem}>
        <h4 className={styles.chartTitle}>FPS</h4>
      </div>
    </div>
  );
}

export default ChartsBox;
