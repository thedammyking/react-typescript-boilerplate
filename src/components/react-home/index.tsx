import React from 'react';
import { ReactLogo } from 'assets/svgs';
import styles from './reactHome.module.scss';

function ReactHome() {
  return (
    <div className={styles.reactHome}>
      <header className={styles.reactHomeHeader}>
        <ReactLogo className={styles.reactHomeLogo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.reactHomeLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ReactHome;
