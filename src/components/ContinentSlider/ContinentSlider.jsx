import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './ContinentSlider.scss'
import { ThemeContext } from '../../contexts/ThemeProvider'
import { THEME } from '../../consts'

const ContinentSlider = ({onClick}) => {

    const {setTheme} = useContext(ThemeContext)
    const names = [THEME.AFRICA, THEME.AMERICA, THEME.ASIA, THEME.EUROPE, THEME.OCEANIA]

    const handleRegion = (e) =>{
        onClick(e.target.name)
        setTheme(e.target.name)
    }

    return (
        <div className="vertical-slider">
            
        {names.map((regionName, index) => <button 
                                    key={index}
                                    name={regionName} 
                                    className="btn" 
                                    onClick={handleRegion}
                                    >
                                        {regionName}
                                    </button>)}
        </div>
    )
}

ContinentSlider.propTypes = {

}

export default ContinentSlider
