import React, { useRef } from 'react'
import styles from './Contact.module.scss'
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"
import language from '../../misc/language';
export default function Contact({ selectedTheme, darkMode, selectedLanguage }) {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0gay6zt', 'template_ht2uj5j', form.current, 'wtmzVAmHJ-t4Fe3xn')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 3}} className={styles.container}>
        <div className={styles.contact}>
            <h1 style={{color: selectedTheme}}>{language[7][selectedLanguage]}</h1>
            <span style={{textAlign: 'center'}}>{language[8][selectedLanguage]}</span>
            <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
                <input style={{background: darkMode ? 'rgb(40, 40, 40)' : 'rgb(200,200,200)'}} type='text' className={styles.name} placeholder={language[9][selectedLanguage]} name='your_name'/>
                <input style={{background: darkMode ? 'rgb(40, 40, 40)' : 'rgb(200,200,200)'}} type='email' className={styles.email} placeholder={language[10][selectedLanguage]} name='your_email'/>
                <textarea style={{background: darkMode ? 'rgb(40, 40, 40)' : 'rgb(200,200,200)', fontSize: '16px'}} className={styles.msg} name='message' rows='5' placeholder={language[11][selectedLanguage]}/>
                <button  type='submit' value='Send' style={{backgroundColor: selectedTheme}} className={styles.submitBtn}>{language[12][selectedLanguage]}</button>
            </form>
        </div>
    </motion.div>
  )
}
