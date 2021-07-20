import React from 'react';
import { SVG } from '../../svg';
import styles from './btns.module.css';
import cn from 'classnames';
{
  /* <SVG.Settings />
<SVG.Friends />
<SVG.Player />
<SVG.Grafic /> */
}

interface IProps {
  icon: any;
  text: string;
  className?: string;
}
const Btn = ({ icon, text, className }: IProps) => {
  return (
    <button className={cn(styles.Btn, className)}>
      {icon}
      <span>{text}</span>
    </button>
  );
};
export const Btns = () => {
  return (
    <div className={styles.Btns}>
      <Btn
        icon={<SVG.Grafic className={styles.Grafic_icon} />}
        text=""
        className={styles.Small_btn}
      />
      <Btn
        icon={<SVG.Player className={styles.Player_icon} />}
        text="Помощь"
        className={styles.Btn_continue}
      />

      <Btn
        icon={<SVG.Friends className={styles.Friends_icon} />}
        text=""
        className={styles.Small_btn}
      />
    </div>
  );
};
