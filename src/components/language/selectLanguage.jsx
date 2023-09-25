import React from 'react'
import { FaLanguage } from "react-icons/fa";
import styles from './selectLanguage.module.scss'
export default function SelectLanguage({selectedLanguage, setSelectedLanguage}) {
  return (
    <div className={styles.container}>
        <button onClick={() => setSelectedLanguage(selectedLanguage === 0 ? 1 : 0)}><FaLanguage size={28}/></button>
    </div>
  )
}
