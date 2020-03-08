import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { StyledCaroussel } from '../../styles'

import { WeatherCard } from '../WeatherCard'
import { NavBar } from '../NavBar'

import { getCountryByWoeid } from '../../api/api'
import { countries } from '../../utils'

import { useSelectedCountry } from '../../hooks/useSelectedCountry'

const CarousselCards = styled(StyledCaroussel) `
  margin-top: 200px;
`;

const StyledWeatherPanel = styled.div`

  padding: 20px;
  .cards {  
    height: 320px;
  }
`;

export const WeatherPanel = () => {
  const [weatherList, setWeatherList] = useState([]);
  const [selectedCountry, updateSelected] = useSelectedCountry(countries[0]);

  useEffect(() => {
      getCountryByWoeid(selectedCountry)
      .then( res => setWeatherList(res.data.consolidated_weather) )
  }, [selectedCountry])

  return (
    <StyledWeatherPanel> 
      
      {NavBar(updateSelected, selectedCountry)}

      <CarousselCards>
        <div className="cards container">
          {!!weatherList && !!weatherList.length &&
            weatherList.map((forecast) => 
              WeatherCard(forecast)
          )}
        </div>
      </CarousselCards>

    </StyledWeatherPanel>
  )
};