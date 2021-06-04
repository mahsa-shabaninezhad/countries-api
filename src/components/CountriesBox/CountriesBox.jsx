import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './CountriesBox.scss'
import { ThemeContext } from '../../contexts/ThemeProvider'

const CountriesBox = ({continent, weather}) => {

    const sliderRef = useRef(null)

    const {theme} = useContext(ThemeContext)

    const handleScrollToLeft = ()=>{
        sliderRef.current.scrollLeft += 280
    }
    const handleScrollToRight = ()=>{
        sliderRef.current.scrollLeft -= 280

    }

    return (
        <div className="slider">
            <div className="slider__cards" ref={sliderRef}>
                {continent.map((country, index) => <Card key={country.name} country={country} weather={weather}/>)}
            </div>
            <div className="slider__buttons">
                <button className="btn next-btn" onClick={handleScrollToLeft} style={{backgroundColor: theme.color}}>&lsaquo;</button>
                <button className="btn prev-btn" onClick={handleScrollToRight} style={{backgroundColor: theme.color}}>&rsaquo;</button>
            </div>
        </div>
    )
}

CountriesBox.propTypes = {

}

export default CountriesBox
