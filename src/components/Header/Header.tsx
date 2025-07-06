import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/emblem.svg" alt="Aggroup" />
        <span className={styles.logoText}>UI</span>Trace
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>History</li>
        </ul>
      </nav>
      <div className={styles.langSwitcher}>
        <button>RU</button>
        <button>EN</button>
      </div>
    </header>
  );
}

export default Header;
