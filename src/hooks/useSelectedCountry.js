import { useState, useEffect } from 'react';

export const useSelectedCountry = ( { name, woeid } ) => {
  const [selectedCountry, setSelectedCountry] = useState({ name, woeid });

  const updateSelected = (country) => {

    setSelectedCountry(country);
  }

  useEffect (() => {}, [{ name, woeid }]);

  useEffect (() => {
    updateSelected({ name, woeid });
  }, []);

  return [selectedCountry, updateSelected];
};

export default useSelectedCountry;