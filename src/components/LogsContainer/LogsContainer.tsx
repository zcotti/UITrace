import React from "react";
import styles from "./LogsContainer.module.scss";

function LogsContainer() {
  return (
    <div className={styles.logsSection}>
      <span className={styles.textMain}>Logs</span>
      <div className={styles.containerLogs}>
        <div className={styles.logOutput}>
          <pre className={styles.logEntry + " " + styles.info}>[02:36 PM] INFO: Example started</pre>
          <pre className={styles.logEntry + " " + styles.error}>[02:37 PM] ERROR: Timeout exceeded</pre>
        </div>
      </div>
    </div>
  );
}

export default LogsContainer;
