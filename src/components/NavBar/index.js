
import React from 'react';
import styled from 'styled-components'

import { StyledCaroussel } from '../../styles'
import { Button } from '../Button'

import { countries } from '../../utils'

const CountryList = styled(StyledCaroussel) `
  
  height: 80px;
  padding: 0 18%;

`;

export const NavBar = ( callback, selected ) => {

  const selectButton = ({name, woeid}) => {
    return () => callback({name, woeid});
  }

  return(
      <CountryList className="country-list container">
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
      </CountryList>
  );
};