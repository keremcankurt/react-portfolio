import React from 'react'
import styles from './skills.module.scss'
import skills from '../../misc/skills'
import { motion } from "framer-motion"
import language from '../../misc/language'
export default function Skills({ selectedTheme, selectedLanguage }) {
  return (
    <div className={styles.container}>
        <h1 className={styles.title} style={{color: selectedTheme}}>{language[2][selectedLanguage]}</h1>
        <div className={styles.skills}>
            {
                skills.map(skill => (
                    <div className={styles.skill}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px'}}> 
                            <h3>{skill.title}</h3>
                            <span>
                            {skill.icon}
                            </span>
                        </div>
                        <div className={styles.skillBar}>
                            <motion.div
                            initial={{ width: '0%'}} whileInView={{width: skill.knowledgeLevel+'%'}} transition={{ duration: 2}}
                            className={styles.progressBar}
                            style={{ backgroundColor: selectedTheme }}
                            ></motion.div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
