
import React from 'react';
import styled from 'styled-components'

import { StyledCaroussel } from '../../styles'
import { Button } from '../Button'

import { countries } from '../../utils'

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

export const NavBar = ( callback, selected ) => {

  const selectButton = ({name, woeid}) => {
    return () => callback({name, woeid});
  }

  return(
    <CountryList>
      <ul className="country-list container">
        {countries.map(({ name, woeid }) => {
          return(
            <li key={ woeid }> 
              <Button 
                onClick={ selectButton({ name, woeid }) }
                selected={ woeid === selected.woeid }
                >
                  {name}
                </Button> 
            </li>
          );
        })}
      </ul>
    </CountryList>
  );
};