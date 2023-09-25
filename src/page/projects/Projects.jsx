import React, { useState } from 'react'
import styles from './Projects.module.scss'
import projects from '../../misc/projects'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { motion } from "framer-motion"
import language from '../../misc/language';
export default function Projects({selectedTheme, darkMode, selectedLanguage}) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedProjects, setSelectedProjects] = useState(projects[0])
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 2}} className={styles.container}>
        <h1 style={{color: selectedTheme}}>{language[3][selectedLanguage]}</h1>
        <div className={styles.buttons}>
            <button 
                onClick={() => {
                    setSelectedIndex(0)
                    setSelectedProjects(projects[0])
                }}
                style={{backgroundColor: selectedTheme}} 
                className={selectedIndex === 0 && styles.selected} 
                disabled={selectedIndex === 0}>
                Web
            </button>
            <button 
                onClick={() => {
                    setSelectedIndex(1)
                    setSelectedProjects(projects[1])
                }}
                style={{backgroundColor: selectedTheme}} 
                className={selectedIndex === 1 && styles.selected} 
                disabled={selectedIndex === 1}>
                {language[4][selectedLanguage]}
            </button>
            <button 
                onClick={() => {
                    setSelectedIndex(2)
                    setSelectedProjects(projects[2])
                }}
                style={{backgroundColor: selectedTheme}} 
                className={selectedIndex === 2 && styles.selected} 
                disabled={selectedIndex === 2}>
                {language[5][selectedLanguage]}
            </button>
        </div>
        <div className={styles.projects}>
            {
                selectedProjects.map(project => (
                    <div className={styles.project}>
                        <img src={project.picture} alt='project'/>
                        <div className={styles.infos}>
                            <h2>{project.title}</h2>
                            <span className={styles.desc} style={{color: 'gray'}} dangerouslySetInnerHTML={{__html: project.desc[selectedLanguage]}}></span>
                            <div className={styles.links} >
                                {
                                    project.github &&
                                    <a href={project.github} style={{color: 'white'}} target='_blank' rel="noopener noreferrer">Source Code <FaGithub /></a>
                                }
                                {
                                    project.site &&
                                    <a href={project.site} style={{color: 'white'}} target='_blank' rel="noopener noreferrer">Website <CgWebsite /></a>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
            <a href='https://github.com/keremcankurt?tab=repositories' style={{color: 'white'}} target='_blank' rel="noopener noreferrer">{language[6][selectedLanguage]}<FaGithub /></a>
    </motion.div>
  )
}
