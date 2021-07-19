import React from "react";
import { SVG } from "../../svg";
import styles from './header.module.css'
import cn from 'classnames'
export const Header = () => {
    
    return (
        <header className={styles.Header}>
            <SVG.Close   className={cn(styles.Icon, styles.Icon_close)}/>
            <SVG.Menu   className={cn(styles.Icon, styles.Icon_menu)}/>
        </header>
    )
}