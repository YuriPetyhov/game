import React from 'react';
import { Btns } from '../Btns';
import styles from './main.module.css';
import { SVG } from '../../svg';
import { Timer } from '../Timer/Timer';
export const Main = () => {
  return (
    <main className={styles.Main}>
      <div className={styles.Content}>
        <Timer time="10:04" />
        <div className={styles.Settings}>
          <SVG.Settings />
        </div>
      </div>
      <Btns />
    </main>
  );
};
