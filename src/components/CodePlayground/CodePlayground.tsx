import React, { useState } from "react";
import styles from "./CodePlayground.module.scss";
import Editor from "@monaco-editor/react";
//import * as Babel from "@babel/standalone";

const DEFAULT_CODE = `function Hello() {
  return <div style={{ padding: 20 }}>Hello, world!</div>;
}`;

function CodePlayground() {
  const [code, setCode] = useState(DEFAULT_CODE);

  return (
    <div className={styles.containerCodePlayground}>
      <span className={styles.textMain}>Code Playground</span>
      <div className={styles.container}>
        <div className={styles.codeInput}>
          <Editor
            height="100%"
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={(v) => v && setCode(v)}
            options={{
              minimap: { enabled: false },
            }}
          />
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btnRender}>Render</button>
          <button className={styles.btnRunTest}>Run Test</button>
          <button className={styles.btnReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default CodePlayground;
