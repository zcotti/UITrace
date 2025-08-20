import React from "react";
import styles from "./MetricsPanel.module.scss";
import MetricsBox from "../MetricsBox/MetricsBox";
import ChartsBox from "../ChartsBox/ChartsBox";

const date = {
  renderTime: 144,
  reRenders: 2,
  fps: 50,
  memoryUsage: 13.4,
  virtualDom: 4,
  compUpd: 15,
};

function MetricsPanel() {
  return (
    <div className={styles.metricsPanel}>
      <>
        <span className={styles.textMain}>Metrics</span>
        <div className={styles.wrapper}>
          <MetricsBox
            renderTime={date.renderTime}
            reRenders={date.reRenders}
            fps={date.fps}
            memoryUsage={date.memoryUsage}
            virtualDom={date.virtualDom}
            compUpd={date.compUpd}
          />
          <ChartsBox />
        </div>
      </>
    </div>
  );
}

export default MetricsPanel;
