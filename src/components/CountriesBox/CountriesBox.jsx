import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './CountriesBox.scss'

const CountriesBox = ({continent}) => {
    console.log('box is renderd again');
    const sliderRef = useRef(null)

    const handleScrollToLeft = ()=>{
        sliderRef.current.scrollLeft += 280
    }
    const handleScrollToRight = ()=>{
        sliderRef.current.scrollLeft -= 280

    }

    return (
        <div className="slider">
            <div className="slider__cards" ref={sliderRef}>
                {continent.map((country, index) => <Card key={country.name} id={index} country={country}/>)}
            </div>
            <div className="slider__buttons">
                <button className="btn next-btn" onClick={handleScrollToLeft}>&lsaquo;</button>
                <button className="btn prev-btn" onClick={handleScrollToRight}>&rsaquo;</button>
            </div>
        </div>
    )
}

CountriesBox.propTypes = {

}

export default CountriesBox
