import React from 'react'
import styles from './pageMode.module.scss'
import { FaMoon, FaSun } from 'react-icons/fa';
export default function PageMode({darkMode, toggleDarkMode}) {
  return (
    <div className={styles.container} >
        <button onClick={toggleDarkMode}>
        {darkMode ? <FaSun size={25} color='gray'/> : <FaMoon size={25} color='gray'/>}
      </button>
    </div>
  )
}
