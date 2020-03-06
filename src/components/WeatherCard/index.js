import React from 'react';

import styled from 'styled-components';
import { Title } from '../../styles';

const DayBanner = styled(Title)`
  text-align: center;
  font-size: 16px;
`;

const TempBanner = styled(DayBanner)`
  font-weight: bold;
  font-size: 32px;
`;

const StyledCardHeader = styled.div`
  height: 20px;
  width: 200px;
  
  background-color: #4A8CE9;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const StyledInfo = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 10px;

  p {
    margin: 0;
    font-size: 12px;
    text-align: center;
  }

  .info p + p {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const StyledWeatherCard = styled.div`
  position: relative;
  margin: 0 10px 0;
  width: 200px;
  height: 280px;
  
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  color: #3C3A45;

  display: inline-block;

  .contents {
    position: relative;
    height: 100%;
    width: 208px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .content-image {
    display: flex;
    justify-content: center;
    margin-top: 4%;
    margin-bottom: 4%;
  }

  .footer-card{
    height:12px
  }

`;

const InfoDisclaimer = (text, temp) => {
  return (
    <div className={`${text} info`}>
      <p>{text}</p>
      <p>{temp}</p>
    </div>
  );
}

export const WeatherCard = ({ weather_state_abbr, wind_direction_compass, applicable_date, min_temp, max_temp, the_temp , wind_speed }) => {
  return (
    <StyledWeatherCard>
      <StyledCardHeader />
      <div className="contents">
        <DayBanner> Monday </DayBanner>
        <div className="content-image">
            <img 
              src={"https://www.metaweather.com/static/img/weather/png/64/c.png"} 
              alt="forecast-img" 
            />
        </div>
        <TempBanner>25º</TempBanner>
        <div>
          <StyledInfo className="info temp">
            {InfoDisclaimer("min", `${2}º`)}
            {InfoDisclaimer("max", `${22}º`)}
          </StyledInfo>
          <StyledInfo className="info wind">
            {InfoDisclaimer("wind speed", 5)}
            {InfoDisclaimer("wind dir", "SW")}
          </StyledInfo>
        </div>
      <div className="footer-card"/>
      </div>
    </StyledWeatherCard>
  );
}