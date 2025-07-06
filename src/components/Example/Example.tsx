import React, { useState } from "react";
import styles from "./Example.module.scss";
import ActionButtons from "../ActionButtons/ActionButtons";
import Switcher from "../Switcher/Switcher";

function Example() {
  const [activeOption, setActiveOption] = useState<string>("BigList");
  const options = ["BigList", "AnimatedBox", "ChartComponent"];

  const handleStart = () => {
    console.log("ЗАПУСК");
  };

  const handleStop = () => {
    console.log("СТОП");
  };

  return (
    <div className={styles.mainContainerExample}>
      <span className={styles.textMain}>Examples</span>
      <div className={styles.containerExample}>
        <Switcher
          options={options}
          activeOption={activeOption}
          onChange={setActiveOption}
        />
        <div className={styles.line}></div>
        <ActionButtons onStart={handleStart} onStop={handleStop} />
      </div>
    </div>
  );
}

export default Example;
