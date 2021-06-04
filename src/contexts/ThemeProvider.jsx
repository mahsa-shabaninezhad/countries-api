import React, { useState } from 'react'
import { THEME } from '../consts/index'
import { STYLES } from '../consts/styles'

export const ThemeContext = React.createContext({theme: STYLES[THEME.ASIA], setTheme: () => {}}) 

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(STYLES[THEME.AMERICA])

    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: (continentName) => setTheme(STYLES[continentName])}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
