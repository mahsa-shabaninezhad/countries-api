import { useState, useEffect, useContext } from 'react';
import './App.scss';
import ContinentSlider from './components/ContinentSlider/ContinentSlider';
import CountriesBox from './components/CountriesBox/CountriesBox';
import Weather from './components/Weather/Weather';
import { ThemeContext } from './contexts/ThemeProvider';

function App() {

  //STATES
  const [countries, setCountries] = useState(null)
  const [region, setRegion] = useState('americas')
  const [weather, setWeather] = useState(false)

  //CONTEXT
  const {theme} = useContext(ThemeContext)
  
  useEffect(() => {
    const getData = async () => {
      const countriesListTemp = {africa: [], americas: [], asia: [], europe: [], oceania: []}
      for (const region in countriesListTemp) {
        countriesListTemp[region] = await getContriesList(region);
      }
      setCountries({...countriesListTemp})
    }
    getData()
  }, [])
  

  const getContriesList = async (region) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    const data = await response.json()
    return data
  }
  

  const handleRegionChange = (region) => {
    setRegion(region)
  }

  const handleWeatherRequest = (city) => {
    setWeather(city)
  }
  

  return (
    <div className="App" style={{ 
      backgroundImage: theme.backgroundImage 
    }}>
      
      {!weather && <ContinentSlider onClick={handleRegionChange}/>}
      {(countries && !weather)&& <CountriesBox continent={countries[region]} weather={handleWeatherRequest}/>}    
      {(countries && weather) && <Weather city={weather} onClose={handleWeatherRequest}/>}    

    </div>
  );
}

export default App;
