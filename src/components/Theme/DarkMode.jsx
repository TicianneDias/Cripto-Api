import React, {useState} from 'react'
import './DarkMode.css'
import {MdDarkMode, MdOutlineLightMode} from 'react-icons/md'

const DarkMode = () => {
    const [content, setContent] = useState([<MdDarkMode/>])
    let clickedClass = 'clicked'
    const body = document.body;
    const lightTheme = 'light';
    const darkTheme = 'dark';
    let theme;
    
    if (localStorage) {
        theme = localStorage.getItem('theme')
    }
    
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }
    
    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem('theme', 'light');
            setContent(<MdDarkMode/>)
        } else {
            theme = lightTheme;
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem('theme', 'dark');
            theme = darkTheme;
            setContent(<MdOutlineLightMode/>)
        }
    }
    
    return (
        <button
        className={theme === 'dark' ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
    >{content}</button>
  )
}

export default DarkMode