import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'
import { ThemeContext } from '../../contexts/ThemeProvider'

const Card = ({country, weather}) => {
    const {flag, name, capital, region, nativeName, population, callingCodes, demonym, area} = country

    const {theme} = useContext(ThemeContext)

    return (
        <div className='card'>
            <img src={flag} alt="" className="card__img"/>
            <div className="card__content">
                <h3 className="card__title">
                    <span>{name}</span> 
                    <span>{nativeName}</span> 
                </h3>
                <p>Demonym: {demonym}</p>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Population: {population.toLocaleString()}</p>
                {area? <p>Area: {area.toLocaleString()} Km<sup>2</sup></p>: <p>Area: -</p>}
                <p>Calling Code: {callingCodes}</p>
                <button 
                    className='btn card__btn' 
                    onClick={() => weather(capital)}
                    style={{color: theme.color}}
                >
                    Weather Forcast &rarr;
                </button>
            </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card
