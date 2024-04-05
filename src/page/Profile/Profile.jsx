import React, { useEffect, useState } from 'react'
import styles from './profile.module.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion"
import language from '../../misc/language';
export default function Profile({selectedTheme, selectedLanguage}) {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Full Stack Developer"];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    const handleDownload = () => {
      const fileUrl = 'CV(ENG).pdf'
      window.open(fileUrl, '_blank');
    };
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 2}} className={styles.container}>
        <div className={styles.infos}>
         <span>{language[0][selectedLanguage]}</span>
         <span style={{color: selectedTheme, fontWeight: 'bold'}}>{text}</span>
         <div className={styles.links}>
            <a href='https://www.linkedin.com/in/kerem-can-kurt-730434260/' target='_blank' rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href='https://github.com/keremcankurt' target='_blank' rel="noopener noreferrer">
                <FaGithub />
            </a>
         </div>
         <button className={styles.download} style={{backgroundColor: selectedTheme}} onClick={handleDownload}>{language[1][selectedLanguage]}</button>
        </div>
        <div className={styles.profile} style={{background: selectedTheme}}>
            <div className={styles.content}>
                <img src='/profile.jpeg' alt='profile'/>
            </div>
        </div>
    </motion.div>
  )
}
