import React, { useState } from 'react'
import styles from './theme.module.scss'
import color from '../../misc/color'
export default function Theme({selectedTheme, setSelectedTheme, darkMode}) {
    const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
        <button style={{backgroundColor: selectedTheme}} onClick={() => setOpen(!open)} className={styles.openButton}></button>
        {
            open &&
            <div className={styles.colors} style={{backgroundColor: darkMode ? 'rgb(77, 76, 76)' : 'rgb(216, 215, 215)'}}>
            {
                color.themeColors.map((_color, index) => (
                    <button 
                        className={styles.color} 
                        style={{backgroundColor: _color}} 
                        onClick={() => {setSelectedTheme(color.themeColors[index]); setOpen(false)}}>
                    </button>
                ))
            }
            </div>
        }
    </div>
  )
}
