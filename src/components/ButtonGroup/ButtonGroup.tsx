import styles from "./ButtonGroup.module.scss";
import Button from "../Button/Button";


function ButtonGroup() {
  return (
    <div className={styles.btnContainer}>
      <Button text="Render" className={styles.btnRender}/>
      <Button text="Run Test" className={styles.btnRunTest}/>
      <Button text="Reset" className={styles.btnReset}/>
    </div>
  );
}

export default ButtonGroup;
