import React from 'react';
import styled from 'styled-components'

import { WeatherCard } from '../WeatherCard'
import { Button } from '../Button'

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
}

export const WeatherPanel = ({ forecast }) => {
  return (
    <StyledWeatherPanel> 
      
      {NavCountry(countries)}

      <CarousselCards>
        <div className="cards container">
          <WeatherCard /> 
          <WeatherCard /> 
          <WeatherCard /> 
          <WeatherCard /> 
          <WeatherCard /> 
        </div>
      </CarousselCards>
    </StyledWeatherPanel>
  )
}

const countries = [
  {
    name: "Lisbon",
    woeid: 742676
  },
  {
    name: "London",
    woeid: 44418
  },
  {
    name: "New York",
    woeid: 2459115
  },
  {
    name: "São Paulo",
    woeid: 455827
  },
]