import React, { useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({id, country}) => {
    console.log('i am rerenderig!!!');
    const {flag, name, capital, region, nativeName, population, callingCodes, demonym, area} = country

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
            </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card
