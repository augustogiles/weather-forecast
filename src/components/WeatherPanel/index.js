import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { WeatherCard } from '../WeatherCard'
import { Button } from '../Button'

import { getCountryByWoeid } from '../../api/api'
import { countries } from '../../utils'

const StyledCaroussel = styled.div `
  width: 100%;

  .container {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    } 
  }
`
const CountryList = styled(StyledCaroussel) `
  height: 80px;
  
  .country-list {
    display:flex;
    list-style: none;
    padding: 0;
    margin: 0 -20px 0 -20px;
    height: 100%;
  }

  .country-list li{
    min-width: 230px;
    
    &:first-child {
      margin-left: 160px;
    }
  }
`;

const CarousselCards = styled(StyledCaroussel) `
  margin-top: 200px;
`;

const StyledWeatherPanel = styled.div`

  padding: 20px;
  .cards {  
    height: 320px;
  }
`;

export const NavCountry = ( countries ) => {
  return(
    <CountryList>
      <ul className="country-list container">
        {countries.map(({name, onClick}) => {
          return(
            <li key={name}> <Button>{name}</Button> </li>
          );
        })}
      </ul>
    </CountryList>
  );
};

export const WeatherPanel = ({ forecast }) => {
  const [weatherList, setWeatherList] = useState([]);
  const [selected, setSelected] = useState({ 
    name: "Lisbon",
    woeid: 742676
  });

  useEffect(() => {
    getCountryByWoeid({ woeid:742676}).then( res => setWeatherList(res.data.consolidated_weather) )
  }, [])



  console.log(weatherList, !!weatherList && !!weatherList.length );
  return (
    <StyledWeatherPanel> 
      
      {NavCountry(countries)}

      <CarousselCards>
        <div className="cards container">
          {!!weatherList && !!weatherList.length &&
            weatherList.map((forecast) => {
              console.log(forecast)
              return WeatherCard(forecast);
            })}
        </div>
      </CarousselCards>
    </StyledWeatherPanel>
  )
};