import React from 'react';
import styles from './NavigationItem.module.css';
//import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItem = (props) => (
    <li className={styles.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? styles.active : null}>
             {props.children} 
            
        </a>
      
    </li>
);

export default NavigationItem;