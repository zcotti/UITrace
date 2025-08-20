import React, { useState } from "react";
import styles from "./CodePlayground.module.scss";
import Editor from "@monaco-editor/react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

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
        <ButtonGroup/>
      </div>
    </div>
  );
}

export default CodePlayground;
