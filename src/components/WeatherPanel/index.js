import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { StyledCaroussel } from '../../styles'

import { WeatherCard } from '../WeatherCard'
import { NavBar } from '../NavBar'
import { Loading } from '../Loading'

import { getCountryByWoeid } from '../../api/api'
import { countries } from '../../utils'

import { useSelectedCountry } from '../../hooks/useSelectedCountry'

const CardList = styled(StyledCaroussel) `
  
  height: 300px;
  padding: 0 3%;

`;

const StyledWeatherPanel = styled.div`

  padding: 20px;
  .cards {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-top: 200px;
    padding: 0 3%;

    &::-webkit-scrollbar {
      display: none;
    } 
  }
`;

export const WeatherPanel = () => {
  const [loading, setLoading] = useState(true);
  const [weatherList, setWeatherList] = useState([]);
  const [selected, setSelected] = useSelectedCountry(countries[0]);

  useEffect(() => {
    getCountryByWoeid(selected)
    .then( res => {
      setWeatherList(res.data.consolidated_weather)
      setLoading(false);
    } )

    return () => {
      setWeatherList([]);
      setLoading(true);
    };
  }, [selected])

  return (
    <StyledWeatherPanel> 
      
      {loading ? <Loading/> : null}
      {NavBar(setSelected, selected)}
        
      <CardList className="cards container">
        {!!weatherList && !!weatherList.length &&
          weatherList.map((forecast) => 
            <li>
              {WeatherCard(forecast)}
            </li>
        )}
      </CardList>

    </StyledWeatherPanel>
  )
};