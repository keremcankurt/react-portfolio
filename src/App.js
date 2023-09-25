import { useState } from 'react';
import './global.scss'
import Profile from './page/Profile/Profile';
import PageMode from './components/pageMode/pageMode';
import Theme from './components/theme/Theme';
import color from './misc/color';
import Skills from './page/Skills/Skills';
import Projects from './page/projects/Projects';
import Contact from './page/Contact/Contact';
import { motion, useScroll, useSpring } from "framer-motion"
import SelectLanguage from './components/language/selectLanguage';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(color.themeColors[0]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="App" style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}>
      <motion.div className="progress-bar" style={{ scaleX, background: selectedTheme }} />
      <PageMode darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <SelectLanguage selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
      <Theme selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} darkMode={darkMode}/>
      <Profile selectedTheme={selectedTheme} selectedLanguage={selectedLanguage}/>
      <Skills darkMode={darkMode} selectedTheme={selectedTheme} selectedLanguage={selectedLanguage}/>
      <Projects selectedTheme={selectedTheme} darkMode={darkMode} selectedLanguage={selectedLanguage}/>
      <Contact selectedTheme={selectedTheme} darkMode={darkMode} selectedLanguage={selectedLanguage}/>
    </div>
  );
}

export default App;
