import React from "react";
import styles from "./Example.module.scss";

function Example() {
  return (
    <div className={styles.mainContainerExample}>
      <span className={styles.textMain}>Examples</span>
      <div className={styles.containerExample}>
        <div className="exampleSwitcher">
          <ul>
            <li className={styles.active}>BigList</li>
            <li>AnimatedBox</li>
            <li>ChartComponent</li>
          </ul>
        </div>
        <div className={styles.line}></div>
        <div className={styles.btnContainer}>
          <button className={styles.btnStart}>Start Example</button>
          <button className={styles.btnStop}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default Example;
