import React from 'react';
import styles from './timer.module.css';
interface ITime {
  time: string;
}
export const Timer = ({ time }: ITime) => {
  return <span className={styles.Timer}>{time}</span>;
};
